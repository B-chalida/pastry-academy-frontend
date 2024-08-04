import NavBar from "../../components/Navbar";

function OurStoryPage() {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="mx-5 mt-10 rounded-3xl">
        <div className="h-screen py-10">
          <section className="text-center mb-10 border-b font-adamina">
            <h1 className="text-4xl font-bold text-textMain-mirage mb-4">
              Our Story
            </h1>
            <p className="text-textSecondary-riverbed mt-4 mb-10 mx-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </section>

          <section className="text-center mb-10 border-b font-adamina">
            <h1 className="text-4xl font-bold text-textMain-mirage mb-4">
              Welcome to The Dough & Pastry Academy
            </h1>
            <p className="text-textSecondary-riverbed mt-4 mb-10 mx-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </section>

          <section className="text-center mb-10 font-adamina">
            <h2 className="text-4xl font-bold text-textMain-mirage mb-4">
              Academy Images
            </h2>
            <p className="text-textSecondary-riverbed mt-4 mx-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </section>

          <section className="flex flex-wrap justify-center font-plus_jakarta_sans text-textSecondary-riverbed">
            {[
              {
                name: "test image",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                img: "public/image/location-image-01.png",
              },
              {
                name: "test image",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                img: "public/image/location-image-02.png",
              },
              {
                name: "test image",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                img: "public/image/location-image-03.png",
              },
              {
                name: "test image",
                title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                img: "public/image/location-image-04.png",
              },
            ].map((baker, index) => (
              <div
                key={index}
                className="m-4 p-4 bg-white rounded-lg shadow-md w-full sm:w-1/2 md:w-1/4 text-center"
              >
                <img
                  className="mx-auto mb-4"
                  src={baker.img}
                  alt={baker.name}
                />
                <h3 className="text-xl font-bold mt-4 mb-2">{baker.name}</h3>
                <p className="text-textSecondary-riverbed">{baker.title}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default OurStoryPage;
