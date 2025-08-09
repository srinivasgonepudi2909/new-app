import React, { useState } from 'react';

function Dashboard() {
  const [files, setFiles] = useState([]);

  const handlePick = (e) => {
    const list = Array.from(e.target.files || []);
    const metas = list.map(f => ({
      name: f.name,
      size: f.size,
      type: f.type || 'file'
    }));
    setFiles(prev => [...prev, ...metas]);
  };

  const human = (n) => {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    if (n < 1024 * 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)} MB`;
    return `${(n / 1024 / 1024 / 1024).toFixed(1)} GB`;
  };

  return (
    <main className="container dash">
      <aside className="side">
        <h3>Folders</h3>
        <ul className="folders">
          <li className="active">All Files</li>
          {/* Later: add real folder list and selection */}
        </ul>
        <div className="new-folder">
          <input placeholder="New folder name" />
          <button className="btn">Add</button>
        </div>
      </aside>

      <section className="content">
        <div className="upload">
          <input type="file" multiple onChange={handlePick} />
        </div>

        <h3>All Files</h3>
        <table className="file-table">
          <thead>
            <tr><th>Name</th><th>Size</th><th>Type</th></tr>
          </thead>
          <tbody>
            {files.length === 0 ? (
              <tr><td colSpan="3">No files yet.</td></tr>
            ) : files.map((f, i) => (
              <tr key={i}>
                <td>{f.name}</td>
                <td>{human(f.size)}</td>
                <td>{f.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Dashboard;
