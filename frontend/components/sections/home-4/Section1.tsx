import Image from "next/image";

export default function Section1() {
  return (
    <>
      {/*Home 4 Section 1*/}
      <section className="sec-1-home-4 sec-padding">
        <div className="container border-bottom">
          <div className="row">
            <div className="col-lg-8 mx-lg-auto">
              <div className="card">
                <div className="card-img mb-4 text-center">
                  <Image className="rounded-circle avatar-128 object-fit-cover" src="/assets/imgs/page/img-9.png" alt="magzin" width={500} height={500} />
                </div>
                <div className="card-body text-center">
                  <h3 className="mb-3">Hi there! I’m Elowen Hart, a passionate Creative Digital Designer.</h3>
                  <p className="mb-4 fs-7">I specialize in crafting visually compelling and user-centric digital experiences, blending creativity with strategy to bring ideas to life across web, mobile, and brand platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
