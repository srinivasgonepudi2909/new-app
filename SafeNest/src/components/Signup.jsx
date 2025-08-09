import React, { useState } from 'react';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [confirm,  setConfirm]  = useState('');
  const [agree,    setAgree]    = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) return alert('Password must be at least 8 characters.');
    if (password !== confirm) return alert('Passwords do not match.');
    if (!agree) return alert('Please accept Terms & Privacy Policy.');

    alert(`Account created for ${fullName}. Please log in.`);
    // TODO: Call signup API then navigate('/login')
  };

  return (
    <div className="form-container">
      <h2>Create your SafeNest account</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Min 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          minLength={8}
        />

        <label className="checkbox">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>I agree to the Terms and Privacy Policy</span>
        </label>

        <button type="submit" className="btn">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
