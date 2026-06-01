import Image from "next/image";

interface ContentSingleProps {
    image: string;
}

export default function ContentSingle({ image }: ContentSingleProps) {
    return (
        <>
            <div className="d-flex flex-column gap-3">
                <p className="text-dark">In an era defined by rapid notifications, endless to-do lists, and the constant chase for productivity, slowing down can feel like a rebellious act. We’ve been conditioned to believe that faster is better—that success lies in motion, in multitasking, in the hustle. But what if the real fulfillment comes not from doing more, but from doing less, more intentionally?</p>
                <h4 className="mb-0">The Illusion of Busyness</h4>
                <p className="text-dark m-0">Being busy has become a badge of honor. We equate packed schedules with importance and equate stillness with laziness. But chronic busyness often leaves us feeling disconnected—from ourselves, from others, and from the present moment. Our minds race ahead to the next task while our bodies lag behind, overwhelmed and fatigued.</p>
                <p className="text-dark m-0">Slowing down doesn’t mean giving up ambition. It means reclaiming your time, your attention, and your presence. It’s about living in alignment with what truly matters.</p>
                <Image className="rounded-8 my-4 overflow-hidden cover-image" src={image} alt="magzin" width={888} height={460} />
                <h4 className="mb-0">Why Slowing Down Matters</h4>
                <p className="text-dark m-0">When we pause, we allow space for reflection. Without constant noise and motion, we gain perspective on what truly matters. Slowing down helps us make better decisions—not just faster ones. Fast living often robs us of joy. We rush through meals, conversations, and even achievements without fully experiencing them. Moving at a slower pace lets us savor small pleasures: a hot cup of tea, a sunset, a moment of silence.</p>
                <p className="text-dark m-0">Constant urgency places immense strain on our nervous system. Slowing down restores balance. It allows our minds to reset and our bodies to heal—preventing the long-term toll of chronic stress.</p>
                <blockquote className="blockquote">
                    <p className="text-dark m-0 fs-22 fw-medium">There’s more to life than simply increasing its speed. In quiet pauses, we reconnect with who we are, what we love, and why it all matters.</p>
                    <p className="fs-7 mb-0">
                        By <span className="text-dark">Jimmy Dave</span>
                    </p>
                </blockquote>
                <h4 className="mb-0">Small Ways to Embrace Slowness</h4>
                <ul className="list-unstyled ps-0 m-0">
                    <li>
                        <p className="text-dark m-0 fw-semi-bold">
                            Start your day slowly:
                            <span className="text-600 fw-regular"> Resist the urge to check your phone the moment you wake up. Take a few deep breaths, stretch, or journal. Focus on one thing at a time. Eat without distraction. Walk without headphones. Listen without interrupting.</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-dark m-0 fw-semi-bold">
                            Take mindful breaks:
                            <span className="text-600 fw-regular"> Step away from your screen. Breathe. Step outside. Reconnect with your senses. Say no to what drains you. Prioritize rest without guilt.</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-dark m-0 fw-semi-bold">
                            Practice gratitude
                            <span className="text-600 fw-regular"> : Slowing down helps you notice what’s already good in your life—moments often missed in the rush.</span>
                        </p>
                    </li>
                </ul>
                <h4 className="mb-0">Slowness as a Strength</h4>
                <p className="text-dark m-0">The art of slowing down is not about doing less—it’s about doing better. When we take our time, we live more fully. We give ourselves the chance to savor, to reflect, to connect, and to be human in a world that constantly pushes us to be machines.</p>
                <p className="text-dark m-0">In choosing slowness, we choose intention over impulse, meaning over momentum. We learn that life isn’t a race to the finish line—but a journey best experienced one mindful step at a time.</p>
                <h4 className="mb-0">Conclusion</h4>
                <p className="text-dark m-0">Slowing down is not about falling behind—it’s about catching up with yourself. In a culture that glorifies constant motion, choosing stillness is a courageous act. It's a return to intention, to presence, and to the quieter rhythms of life that often hold the greatest meaning.</p>
                <p className="text-dark m-0">Whether it's taking a deep breath between tasks, unplugging for an afternoon, or simply savoring your morning coffee without distraction, each small act of slowness is a step toward a more mindful, fulfilling life.s</p>
                <div className="border-top mt-5 mb-1" />
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center gap-2">
                        <a href="#" className="tag-item px-3">
                            <span>Culture</span>
                        </a>
                        <a href="#" className="tag-item px-3">
                            <span>Sculpture</span>
                        </a>
                        <a href="#" className="tag-item px-3">
                            <span>Media</span>
                        </a>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="text-dark">Share:</span>
                        <div className="d-inline-flex group-social-icons mt-0 rounded-8">
                            <a href="#" className="icon-shape icon-46">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
                                    <path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="black" />
                                </svg>
                            </a>
                            <a href="#" className="icon-shape icon-46">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </a>
                            <a href="#" className="icon-shape icon-46">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                            <a href="#" className="icon-shape icon-46">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                                    <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="block-subscribe h-100 d-flex flex-column flex-lg-row gap-3 justify-content-between bg-200">
                    <div>
                        <div className="block-title d-flex align-items-center gap-1 fs-7 text-600">
                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="fs-7 fw-regular">Newsletter</span>
                        </div>
                        <div className="title">
                            <h5 className="mb-0">
                                Stay Informed with <br className="d-none d-lg-block" />
                                Top Headlines
                            </h5>
                        </div>
                    </div>
                    <div className="decorate-1 mix-blend-multiply bottom-0" data-background="/assets/imgs/template/decorate-3.png" />
                    <form action="#" className="position-relative">
                        <div className="d-flex flex-wrap flex-md-nowrap gap-2 align-items-center mb-3">
                            <input className="form-control" type="text" placeholder="Your email address" />
                            <button className="btn btn-dark" type="submit">
                                Subscribe
                            </button>
                        </div>
                        <input type="checkbox" id="subscribe" />
                        <label htmlFor="subscribe" className="text-600 fs-8">
                            By clicking the button, you are agreeing with our{" "}
                            <a href="#" className="text-dark">
                                Term &amp; Conditions
                            </a>
                        </label>
                    </form>
                </div>
                <h4 className="mt-5 mb-2 pb-4 pt-3">Leave a comment</h4>
                <div className="row wow img-custom-anim-left g-3 border-top">
                    <div className="col-md-6 col-lg-4">
                        <div className="input-group d-flex align-items-center">
                            <div className="icon-input ps-3">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input type="text" className="form-control ms-0" name="name" placeholder="Your name *" aria-label="username" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="input-group d-flex align-items-center">
                            <div className="icon-input ps-3">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="#0E0E0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input type="text" className="form-control ms-0" name="name" placeholder="info@webmail.com" aria-label="email" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="input-group d-flex align-items-center">
                            <div className="icon-input ps-3">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path className="stroke-dark" d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="stroke-dark" d="M9.75 15.7495C9.75 14.6449 10.6455 13.7495 11.75 13.7495H12.25C13.3546 13.7495 14.25 14.6449 14.25 15.7495V19.2495H9.75V15.7495Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input type="text" className="form-control ms-0" name="name" placeholder="Website" aria-label="website" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group d-flex">
                            <div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                    <path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        className="fill-dark"
                                        d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <textarea className="form-control" name="name" placeholder="Your message...." aria-label="With textarea" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-dark rounded-8 gap-2">
                            Submit comment
                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" stroke="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <h4 className="mt-5 mb-2 pt-3 wow img-custom-anim-left">Comments</h4>
                <div className="d-flex flex-wrap flex-lg-nowrap gap-4 align-items-start pt-4 border-top wow img-custom-anim-top">
                    <Image className="rounded-16 avatar-xl" src="/assets/imgs/template/author/author-18.png" alt="infinia" width={500} height={500} />
                    <div>
                        <div className="d-flex flex-wrap gap-2 align-items-center">
                            <h6 className="mb-0 fs-6 text-900 fw-">Tromas H. Hendson</h6>
                            <span className="mb-0 fs-6 text-500">June 9, 2026</span>
                        </div>
                        <p className="py-3 m-0 tex-500">Variations in the floor plan, window location, and interstitial outdoor spaces enhance this material homogeneity. The goal was to produce a unified whole using a modern design language, where attention to materiality and detail is evident. All flats have two sides and are in close proximity to the outside world.</p>
                        <a href="#" className="d-inline-flex text-600 hover-dark">
                            <span className="bg-200 fs-8 rounded-8 py-2 px-3"> Reply </span>
                        </a>
                    </div>
                </div>
                <div className="border-top" />
                <div className="d-flex flex-wrap flex-lg-nowrap gap-4 align-items-start pt-4 ms-5 ps-5 wow img-custom-anim-top">
                    <Image className="rounded-16 avatar-xl" src="/assets/imgs/template/author/author-15.png" alt="infinia" width={500} height={500} />
                    <div>
                        <div className="d-flex flex-wrap gap-2 align-items-center">
                            <h6 className="mb-0 fs-6 text-900 fw-">Rosalina D.</h6>
                            <span className="mb-0 fs-6 text-500">June 10, 2026</span>
                        </div>
                        <p className="py-3 m-0 tex-500">Variations in the floor plan, window location, and interstitial outdoor spaces enhance this material homogeneity. The goal was to produce a unified whole using a modern design language, where attention to materiality and detail is evident. All flats have two sides and are in close proximity to the outside world.</p>
                        <a href="#" className="d-inline-flex text-600 hover-dark">
                            <span className="bg-200 fs-8 rounded-8 py-2 px-3"> Reply </span>
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-wrap flex-lg-nowrap gap-4 align-items-start border-top pt-4 wow img-custom-anim-top">
                    <Image className="rounded-16 avatar-xl" src="/assets/imgs/template/author/author-9.png" alt="infinia" width={500} height={500} />
                    <div>
                        <div className="d-flex flex-wrap gap-2 align-items-center">
                            <h6 className="mb-0 fs-6 text-900 fw-">Miranda H. Halim</h6>
                            <span className="mb-0 fs-6 text-500">June 9, 2026</span>
                        </div>
                        <p className="py-3 m-0 tex-500">Variations in the floor plan, window location, and interstitial outdoor spaces enhance this material homogeneity. The goal was to produce a unified whole using a modern design language, where attention to materiality and detail is evident. All flats have two sides and are in close proximity to the outside world.</p>
                        <a href="#" className="d-inline-flex text-600 hover-dark">
                            <span className="bg-200 fs-8 rounded-8 py-2 px-3"> Reply </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
