const app = require("./app");
const config = require("./app/config");

async function startServer() {
    try {

        //Khởi tạo server
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server đang chạy trên cổng http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Không thể kết nối đến database!", error);
        process.exit();
    }
}

startServer();