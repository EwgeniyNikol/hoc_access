interface AdminPanelProps {
  currentUser?: { roles: string[] };
}

function AdminPanel({ currentUser }: AdminPanelProps) {
  return (
    <div className="admin-panel">
      <h2>Админская панель</h2>
      <p>Добро пожаловать! Ваши роли: {currentUser?.roles.join(', ') || 'нет'}</p>
    </div>
  );
}

export default AdminPanel;