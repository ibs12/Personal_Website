
function Contact() {
    return (
        <>

            {/* Change h-screen to h-auto or a smaller height */}
            <div id="contact" className="min-h-[50vh] flex flex-col  items-center">
                <div className="bg-gradient-to-r from-neutral-200 via-slate-400 to-neutral-600 bg-clip-text text-transparent font-bold text-6xl md:text-9xl pb-6 pt-20 text-center">
                    Contact
                </div>
                <p className="font-Helvetica text-2xl md:text-3xl font-extralight tracking-wide text-gray-400 pb-5 text-center">
                    Email: ibrahimallahb@gmail.com
                </p>
                <p className="font-Helvetica text-2xl md:text-3xl font-extralight tracking-wide text-gray-400 text-center">
                    Phone: +1(716) 275-4541
                </p>
            </div>
        </>
    );
}

export default Contact;
