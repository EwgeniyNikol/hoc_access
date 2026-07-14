import { useState } from 'react';
import AdminPanelWithAuth from './components/AdminPanelWithAuth';

interface UserOption {
  label: string;
  roles: string[];
}

const users: UserOption[] = [
  { label: 'Админ', roles: ['admin', 'user'] },
  { label: 'Пользователь', roles: ['user'] },
];

function App() {
  const [currentUser, setCurrentUser] = useState<UserOption | null>(null);

  const login = (user: UserOption) => setCurrentUser(user);
  const logout = () => setCurrentUser(null);

  return (
    <div className="app">
      <h1>Контроль доступа</h1>
      {currentUser ? (
        <div className="user-info">
          <p>Вы вошли как: <strong>{currentUser.label}</strong></p>
          <button onClick={logout}>Выйти</button>
        </div>
      ) : (
        <div className="login-buttons">
          {users.map(user => (
            <button key={user.label} onClick={() => login(user)}>
              Войти как {user.label}
            </button>
          ))}
        </div>
      )}
      <AdminPanelWithAuth currentUser={currentUser} />
    </div>
  );
}

export default App;