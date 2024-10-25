import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cart.css"; // Ensure the filename matches this import

function Carts({ carts, setCarts }) {
  // ฟังก์ชันสำหรับการลบสินค้าจากตะกร้า
  const handleRemove = (id) => {
    // กรองสินค้าที่มี ID แตกต่างจากสินค้าที่เราต้องการลบ
    const updatedCarts = carts.filter((cart) => cart.id !== id);
    // อัปเดตรายการสินค้าใหม่
    setCarts(updatedCarts);
  };

  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemove(cart.id)} // ใช้ ID ของสินค้าในการลบ
                >
                  Remove from carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <h4>
        Item: <span style={{ color: "#007bff" }}>{carts.length}</span> items -
        Total Price: $
        <span style={{ color: "#007bff" }}>
          {carts
            .reduce((prev, cart) => {
              return prev + cart.price;
            }, 0)
            .toFixed(2)}
        </span>
      </h4>

      <button className="btn btn-warning">Checkout</button>
    </div>
  );
}

export default Carts;
