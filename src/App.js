import { useState } from "react";
import NavBar from "./Components/NavBar";
import Headers from "./Components/Headers";
import Rating from "@mui/material/Rating";

function App() {
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(true);
  let [toggle1, setToggle1] = useState(true);
  let [toggle2, setToggle2] = useState(true);
  return (
    <>
      <NavBar data={{count, setCount}} />
      <Headers />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Laptops</h5>
                    {/* <!-- Product price--> */}
                    $50.00 - $100.00
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={1}
                    />
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(++count);
                          setToggle(!toggle);
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(--count);
                          setToggle(!toggle);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Desktops</h5>
                    {/* <!-- Product price--> */}
                    $30.00 - $100.00
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={1}
                    />
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle1 ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(++count);
                          setToggle1(!toggle1);
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(--count);
                          setToggle1(!toggle1);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Tablet</h5>
                    {/* <!-- Product price--> */}
                    $20.00 - $40.00
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={1}
                    />
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {toggle2 ? (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(++count);
                          setToggle2(!toggle2);
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => {
                          setCount(--count);
                          setToggle2(!toggle2);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
