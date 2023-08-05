import img1 from "./assets/images/img-1.png";
import img2 from "./assets/images/img-2.png";
import img3 from "./assets/images/img-3.png";
import img4 from "./assets/images/img-4.png";
import logo from "./assets/images/logo.png";
import headerImg from "./assets/images/header.png";

function App() {

  return (
    <>
      <header>
        <nav className="bg-[#1A2251] flex justify-between px-4 lg:px-32 items-center py-4">
            <div>
                <img src={logo} alt="" srcSet="" className=" w-24 lg:w-44" />
            </div>
            <div className="hidden gap-x-8 lg:flex">
                <a href="#" className="text-[#F14D0E]">Accueil</a>
                <a href="#" className="text-white">Activités</a>
                <a href="#" className="text-white">Evènements</a>
                <a href="#" className="text-white">Gallerie</a>
            </div>
            <div>
                <a href="#" className="text-white rounded-full px-4 py-2 bg-[#F14D0E]">Nous contacter</a>
            </div>
        </nav>
        <div className="flex flex-col lg:flex-row items-center px-4 lg:px-32 my-6">
            <div className="lg:w-1/2">
                <h2 className="font-bold text-center lg:text-left text-3xl lg:text-5xl leading-tight">
                    Une communauté de développeurs <span className="text-[#F14D0E]">dédiés</span> et <span
                        className="text-[#F14D0E]">innovateurs</span> en Afrique
                </h2>
                <p className="my-4 lg:my-6 text-center lg:text-left">
                    PossaCode est une association dynamique dédiée à la formation et à l'organisation d'événements de
                    rencontre pour les développeurs en Afrique
                </p>
                <div className="flex justify-center lg:justify-start gap-x-2 lg:gap-x-4">
                    <a href="#" className="text-white rounded-full px-4 py-2 bg-[#F14D0E]">Nous rejoindre</a>
                    <a href="#" className="text-[#F14D0E] rounded-full px-4 py-2 border border-[#F14D0E]">Nous contacter</a>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-x-2 mt-4">
                    <span>Voulez-vous devenir partenaire?</span>
                    <span className="text-[#F14D0E]">
                        Remplissez ce formulaire
                    </span>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img src={headerImg} alt="" srcSet="" />
            </div>
        </div>
    </header>
    <section className="bg-gray-100 lpx-4 lg:px-32 py-12">
        <h2 className="text-center text-[#F14D0E] lg:w-1/2 mx-auto font-bold text-2xl">Découvrez qui nous sommes et ce que nous faisons pour
            les développeurs résidant en Afrique</h2>
        <p className="text-center mt-4 px-4 md:px-12 mx-auto">Nous croyons en l'importance de transmettre le flambeau de l'excellence à la prochaine
            génération de
            développeurs. En partageant les parcours inspirants de nos membres, nous inspirons les jeunes esprits à
            embrasser la technologie et à créer leur propre succès dans ce domaine.</p>

            <div className="flex flex-col lg:flex-row gap-x-4 mt-4 lg:mt-24 items-center px-4 lg:px-0">
                <img src={img1} className="lg:w-1/2" />
                <div className="lg:w-1/2">
                    <h3 className="text-[#F14D0E] font-bold text-lg mt-4 lg:mt-0">Développement des Compétences Techniques</h3>
                    <p className="mt-3">Chez PossaCode, nous croyons fermement que des compétences techniques solides sont essentielles pour façonner l'avenir de l'Afrique. Nous proposons une variété de formations de pointe, des ateliers pratiques et des hackathons stimulants pour permettre aux développeurs africains de maîtriser les dernières technologies et de rester à la pointe de l'innovation.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-x-4 mt-4 lg:mt-24 items-center px-4 lg:px-0">
                <div className="lg:w-1/2">
                    <h3 className="text-[#F14D0E] font-bold text-lg mt-4 lg:mt-0">Une Communauté Collaborative</h3>
                    <p className="mt-3">Nous sommes convaincus que le pouvoir du réseau est inestimable. En organisant des meetups et des conférences techniques, nous créons un espace chaleureux où les développeurs peuvent échanger leurs expériences, partager des connaissances et construire des partenariats fructueux. Ensemble, nous bâtissons une communauté solide et soudée.</p>
                </div>
                <img src={img2} className="lg:w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4 mt-4 lg:mt-24 items-center px-4 lg:px-0">
                <img src={img1} className="lg:w-1/2" />
                <div className="lg:w-1/2">
                    <h3 className="text-[#F14D0E] font-bold text-lg mt-4 lg:mt-0">Une Porte Ouverte sur l'Opportunité</h3>
                    <p className="mt-3">Nous sommes convaincus que le pouvoir du réseau est inestimable. En organisant des meetups et des conférences techniques, nous créons un espace chaleureux où les développeurs peuvent échanger leurs expériences, partager des connaissances et construire des partenariats fructueux. Ensemble, nous bâtissons une communauté solide et soudée.</p>
                </div>
            </div>
            <div className="text-center mt-12">
            <a href="#" className="text-white rounded-full px-8 py-3 bg-[#F14D0E]">Nous rejoindre</a>
            </div>
            
    </section>
    <section className="px-4 lg:px-32 py-12">
        <h2 className="text-[#F14D0E] font-bold text-2xl">Nos formations</h2>
        <p className="lg:w-2/3 mt-4">Découvrez nos formations en développement, conçues pour cultiver vos compétences techniques et vous propulser vers l'excellence dans le monde passionnant de la technologie.</p>
        <div className="flex flex-col lg:flex-row gap-y-4 items-center mt-4 lg:mt-12 gap-x-4">
            <div className="w-full">
                <div className="h-56 rounded bg-[#1A2251] mb-2"></div>
                <a href="#" className="text-white rounded block text-center w-full py-3 bg-[#F14D0E]">En savoir plus</a>
            </div>
            <div className="w-full">
                <div className="h-56 rounded bg-[#1A2251] mb-2"></div>
                <a href="#" className="text-white rounded block text-center w-full py-3 bg-[#F14D0E]">En savoir plus</a>
            </div>
            <div className="w-full">
                <div className="h-56 rounded bg-[#1A2251] mb-2"></div>
                <a href="#" className="text-white rounded block text-center w-full py-3 bg-[#F14D0E]">En savoir plus</a>
            </div>
        </div>
    </section>
    <section className="px-4 lg:px-32 py-12 bg-gray-100">
        <h2 className="text-[#F14D0E] font-bold text-2xl">Nos dernières activités</h2>
        <p className="lg:w-2/3 mt-4">Plongez-vous dans l'univers captivant du développement lors de nos événements, où l'innovation, le partage de connaissances et le réseautage ouvrent de nouvelles perspectives pour votre parcours professionnel.</p>
        <div className="flex flex-col lg:flex-row items-center mt-12">
        <div className="lg:w-1/2">
            <img src={img4} alt="" />
        </div>
        <div className="bg-[#1A2251] lg:rounded p-8 lg:p-12 h-min lg:w-1/2 -mt-10 lg:mt-0 lg:-ml-10">
            <span className="font-bold text-white text-xl">Lancement de possaCode</span>
            <p className="mt-4 mb-4 lg:mb-8 text-white">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea</p>
            <a href="#" className="text-white rounded px-6 block w-full text-center lg:px-24 py-3 bg-[#F14D0E]">En savoir plus</a>
        </div>
        </div>
    </section>
    <section className="px-4 lg:px-32 py-12">
    <h2 className="text-[#F14D0E] font-bold text-2xl">Nous contacter</h2>
        <p className="lg:w-2/3 mt-4">Laisser nous un message, nous vous repondrons dès que possible.</p>
        <form action="" className="mt-6">
            <div className="flex flex-col gap-y-2">
                <label htmlFor="" className="font-semibold text-sm">Votre nom</label>
                <input type="text" className="border rounded border-[#F14D0E] p-2" />
            </div>
            <div className="mt-6 flex flex-col gap-y-2">
                <label htmlFor="" className="font-semibold text-sm">Votre adresse email</label>
                <input type="email" className="border rounded border-[#F14D0E] p-2" />
            </div>
            <div className="mt-6 flex flex-col gap-y-2">
                <label htmlFor="" className="font-semibold text-sm">Votre message</label>
                <textarea name="" id="" cols={30} rows={10} className="border rounded border-[#F14D0E] p-2"></textarea>
            </div>
            <a href="#" className="text-white rounded block w-full text-center mt-4 px-8 py-3 bg-[#F14D0E]">Envoyer</a>
        </form>
    </section>
    <footer className="bg-[#1A2251] flex flex-col justify-center py-8 items-center">
            
                <img src={logo} alt="" srcSet="" className="w-44 mb-2" />
                <span className="text-white text-xs">Copyright 2023 | PossaCode</span>
            
    </footer>
    </>
  )
}

export default App
