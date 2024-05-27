import AdminOrders from "../features/admin/components/AdminOrder";
import NavBar from "../features/navbar/Navbar";

function AdminOrdersPage () {
    return (
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
    );
}

export default AdminOrdersPage;