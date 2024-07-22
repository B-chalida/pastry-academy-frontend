import NavBar from "../../components/Navbar";

function LandingPage() {
  return (
    <div>
      <div className="w-screen h-screen bg-white">
        <NavBar />
        <div>
          <div className="h-screen">
            <div>
              <img
                src="public/image/landing-t-image.png"
                alt="landing image"
                className="w-full h-[426px] object-cover object-center"
              />
            </div>
            <div className="pb-24 px-20 font-adamina">
              <div className="flex flex-col border-b px-10">
                <div className="my-10 mx-40 flex justify-center">
                  <span className="text-6xl text-textMain-mirage">
                    The Dough & Pastry Academy
                  </span>
                </div>
                <div className="mx-60 pb-10">
                  <p>
                    Over the last century The Dough & Pastry Academy has seen
                    revolutionising change as we have evolved from a Parisian
                    cooking school to an international network of culinary arts
                    and hospitality institutes - including The Dough & Pastry
                    Academy a joint venture established in Nonthaburi, Thailand.
                    Our philosophy of achieving excellence through constant
                    practice and refinement remains the same, even as we grow to
                    meet the needs of the contemporary culinary and hospitality
                    industries.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="relative flex items-center justify-center h-screen bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('public/image/landing-center-image.png')",
                }}
              >
                <div className="relative z-10 p-8 bg-textMain-mirage bg-opacity-75 shadow-md max-w-xl text-center ml-auto mr-0">
                  <h1 className="text-4xl font-bold text-plus_jakarta_sans text-white mb-4">
                    PROGRAMMES
                  </h1>
                  <p className="text-lg text-contentMain-mercury text-plus_jakarta_sans mb-6">
                    <strong>The Dough & Pastry Academy</strong> For more than a
                    century, The Dough & Pastry Academy has enabled aspiring
                    culinary professionals to turn their ambitions into reality.
                    Nowadays we offer a wide range of culinary arts, wine,
                    management, and hospitality programmes. Regardless of your
                    background, by graduating with The Dough & Pastry Academy,
                    you’ll become part of a great tradition of excellence, with
                    credentials that will set you apart from the competition in
                    a demanding and changing industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold font-adamina text-textMain-mirage text-center mb-12">
                  — Testimonials —
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md text-center relative">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white">
                      <img
                        src="public/image/student-image.png"
                        alt="Testimonial image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg text-plus_jakarta_sans text-textSecondary-riverbed mb-4">
                      I grew up without having any cooking skills at all so I
                      decided to start learning the basic skills at The Dough &
                      Pastry Academy Culinary School. I was always interested in
                      baking because it makes me happy. The joy of learning how
                      to bake goes beyond just eating what you create - it is
                      the creative process itself that brings me joy and
                      happiness
                    </p>
                    <cite className="text-textMain-mirage">
                      — JASON LEE, DIPLÔME DE PÂTISSERIE
                    </cite>
                  </div>
                  <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md text-center relative">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white">
                      <img
                        src="public/image/student-image-2.png"
                        alt="Testimonial image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg text-plus_jakarta_sans text-textSecondary-riverbed mb-4">
                      I grew up without having any cooking skills at all so I
                      decided to start learning the basic skills at The Dough &
                      Pastry Academy Culinary School. I was always interested in
                      baking because it makes me happy. The joy of learning how
                      to bake goes beyond just eating what you create - it is
                      the creative process itself that brings me joy and
                      happiness
                    </p>
                    <cite className="text-textMain-mirage">
                      — JASON LEE, DIPLÔME DE PÂTISSERIE
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
