import withAuthorization from '../hoc/withAuthorization';
import AdminPanel from './AdminPanel';

const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin']);

export default AdminPanelWithAuth;