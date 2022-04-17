import "./Services.css";
import useData from "../../../Hook/useData";
import Item from "../Service/Service";

const Services = () => {
  const [services, setServices] = useData();
  console.log(services);

  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 style={{ fontWeight: "800" }}>Enjoy with our Service</h1>
        <p className="mb-5">
          A largest tourism sector in Bangladesh, Your dream can come true with
          visit our memorable place which is really nice. By the by our well
          known tourist guider who assist you to getting more information about
          visit spot. So, take decision and enjoy with us.
        </p>
      </div>

      <div className="choose-grid">
        {services.map((item) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </div>
    </div>
  );
};

export default Services;
