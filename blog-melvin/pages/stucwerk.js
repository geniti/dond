import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import GalleryStucwerk from "../components/GalleryStucwerk";

export default function stucwerk() {
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <Head>
        <title>Stucwerk</title>
        <meta
          name="description"
          content="Opzoek naar een betrouwbare stucadoor met een goede prijs per m2? Kijk dan eens op de pagina van JRM Afbouw. De #1 afbouwspecialist van Nederland"
        />
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://jrm.geniti.nl/wp-content/uploads/2021/02/2-e1614193189285.png"
                        layout="fill"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        onClick={handleClick}
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                        id="main-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open main menu</span>
                        <svg
                          claclassNamess="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <Link href="/stucwerk">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      Stucwerk
                    </a>
                  </Link>
                  <Link href="/latex-spuiten">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      Latex Spuiten
                    </a>
                  </Link>
                  <Link href="/gipswanden">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      Gispwanden
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      Contact
                    </a>
                  </Link>
                </div>
              </nav>
            </div>

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <a href="/">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://jrm.geniti.nl/wp-content/uploads/2021/02/2-e1614193189285.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={handleClick}
                      type="button"
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                    >
                      <span className="sr-only">Close main menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={`lg:flex ${isOpen ? "block" : "hidden"} `}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                    <Link href="/stucwerk">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Stucwerk
                      </a>
                    </Link>
                    <Link href="/latex-spuiten">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Latex spuiten
                      </a>
                    </Link>
                    <Link href="/gipswanden">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Gipswanden
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Contact
                      </a>
                    </Link>
                  </div>
                  <Link href="mailto:info@jrmafbouw.nl">
                    <div role="none">
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium  text-white bg-red-600 hover:bg-red-400"
                        role="menuitem"
                      >
                        Stuur een bericht
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Wij hebben tijd voor uw{" "}
                  </span>
                  <span className="block text-red-600 xl:inline">Stucwerk</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Er zijn vele verschillende soorten stucwerk mogelijk. Zo kan
                  iedere denkbare kleur gebruikt worden. Er zijn verschillende
                  soorten reliëf mogelijk die in combinatie met kleurgebruik elk
                  voor een apart uiterlijk en sfeer in het huis zorgen.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-400 md:py-4 md:text-lg md:px-10"
                    >
                      Neem contact op
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="tel:=31647611940"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                    >
                      Bel direct
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/JRM Afbouw.jpg"
            alt="Stucwerk door JRM Afbouw Tilburg en omgeving"
            layout="fill"
          />
        </div>
      </div>
      <div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div>
              <h2 className="text-base font-semibold text-red-600 uppercase tracking-wide">
                verschillende soorten
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Stucwerk
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Hier vind je informatie over verschillende soorten stucwerk.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                <div className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    data-todo-x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div id="schuurwerk" className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Schuurwerk
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Schuurwerk is een pleisterwerk dat toe te passen is in
                      bijna elk interieur. Schuurwerk heeft als voordeel dat het
                      egaal wit (natuurlijk wit) opdroogt en dus niet meer
                      gesausd hoeft te worden. Schuurwerk is een gipsachtige
                      afwerking van ca. 3 tot 5 mm dik die op de wand wordt
                      aangebracht. Het gipsachtige karakter van schuurwerk
                      regelt de vochthuishouding in huis op een goede manier.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    data-todo-x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div id="raapwerk" className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Raapwerk
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Berapen is het bedekken van een muur met een laag
                      kalkmortel, een mengsel van kalk en zand, en deze al of
                      niet "onder de rei", d.w.z. met de reilat of raapspaan,
                      glad strijken. Voor buitenmuren wordt cement toegevoegd,
                      tegen het inwerken van vocht en om verstening te
                      bevorderen. Dit laatste wordt ook wel vertinnen genoemd.
                      Bij oude muren zal door het zout- en vochtgehalte daarvan
                      pleisterwerk op basis van gips loslaten, gebruik daarom in
                      dit geval zeker kalkmortel.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    data-todo-x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div id="pleisterwerk" className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Pleisterwerk
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Pleisterwerk is meestal een gladde wand- en
                      plafondafwerking zonder naden die geschikt is als
                      ondergrond om te behangen of te sauzen. Doordat het
                      product niet egaal opdroogt, is (bijna) altijd een
                      nabehandeling vereist. De pleister is slechts enkele
                      millimeters tot enkele centimeters dik, afhankelijk van de
                      methode waarop gepleisterd wordt. Vroeger werd ook wel
                      gepleisterd met klei gemengd met hooi waarover een laag
                      Doornikse kalk werd gestreken. Stucwerkop basis van gips
                      is over het algemeen fijner van structuur dan stucwerk op
                      basis van kalk; met dat gipspleister kunnen fijnere
                      details worden gemaakt.{" "}
                    </dd>
                  </div>
                </div>

                <div className="flex"></div>

                <div className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    data-todo-x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div id="buitenwerk" className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Buitenwerk
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Stucadoorswerk buiten is het herstellen of vernieuwen van
                      uw oude of gemetselde muren van bijvoorbeeld boerderijen,
                      bungalows en buitengevels die uit verschillende
                      steensoorten kunnen bestaan. Om een mooie strak geheel te
                      creëren worden er vier lagen aangebracht. Heeft uw pand
                      verschillende steensoorten? Dan zetten we de hele gevel in
                      het gaas ter voorkoming van scheurvorming.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    data-todo-x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div id="sierpleister" className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Sierpleister
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Sierpleister is een soort van stucwerk met een structuur.
                      Deze structuur komt door de kleine marmer / graniet
                      korreltjes die van dikte verschillen. De granietkorrels
                      die in de kunsthars gebonden mortel zijn verwerkt meestal
                      de kleur wit geven een mooie structuur op uw muren.{" "}
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-red-500"
                    data-todo-x-description="Heroicon name: outline/check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div id="lijstenenornamenten" className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Lijsten en Ornamenten
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Tegenwoordig zijn er een hoop wand- en plafond decoratie
                      mogelijkheden zoals lijsten ornamenten. Dit stucwerk
                      noemen wij decorstuc, hierin kunt u kiezen voor
                      authentieke sierlijsten en rozetten, maar tegenwoordig
                      zijn er ook prachtige strakke sierlijsten die perfect
                      passen in een moderne omgeving ook de ornamenten spelen
                      een rol mee. Onze stucadoors zijn erg kundig in het
                      plaatsen van lijsten ornamenten. Wij onderscheiden twee
                      soorten decoratieve stuc, dat is decor stuc voor wanden en
                      stuc decoratie voor het plafond.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
          <GalleryStucwerk />
          <div className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                  Ga voor resultaat
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Kies voor JRM Afbouw
                </p>
              </div>
              <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                <p className="text-lg text-gray-500">
                  Er zijn vele verschillende soorten stucwerk mogelijk. Zo kan
                  iedere denkbare kleur gebruikt worden. Er zijn verschillende
                  soorten reliëf mogelijk die in combinatie met kleurgebruik elk
                  voor een apart uiterlijk en sfeer in het huis zorgen.
                </p>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                <div className="relative z-10">
                  <div className="prose prose-red text-gray-500 mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500 mb-3">
                      Bij pleister en raapwerk wordt een laag aangebracht om de
                      ruwe oppervlakten mooi strak, glad, egaal en waterpas te
                      maken.
                    </p>{" "}
                    <p className="text-lg text-gray-500 mb-3">
                      Door af te wisselen in de dikte van de stuklaag wordt een
                      wand ook weer recht/waterpas gemaakt. De raap of
                      pleisterlaag kan als uiteindelijke afwerklaag dienen of
                      als ondergrond voor afwerklagen zoals spachtelputz.
                    </p>
                    <p className="text-lg text-gray-500 mb-3">
                      Soorten stucwerk als spachtelputz, granol, marmerpleister
                      en rustiekputz hebben een korrelige structuur die
                      veroorzaakt wordt door toevoeging van zandkorrels en/of
                      kleine steentjes.
                    </p>
                    <p className="text-lg text-gray-500 mb-3">
                      Door deze toevoeging ontstaat er reliëf in het stucwerk.
                      Ook deze soorten stucwerk zijn in iedere kleur leverbaar.
                    </p>{" "}
                    <p className="text-lg text-gray-500 mb-3">
                      Mocht u later van kleur willen veranderen is
                      overschilderen geen probleem. Met een latex zijn de muren
                      of plafond gemakkelijk van een nieuwe verflaag te
                      voorzien.
                    </p>{" "}
                    <p className="text-lg text-gray-500 mb-3">
                      Er zijn naast stuclagen met reliëf ook lagen waarbij het
                      stucwerk juist zo glad mogelijk gemaakt wordt. Soms wordt
                      er ook olie gebruikt om deze muren af te werken en is het
                      stukwerk geschikt voor vochtige ruimtes zoals in de
                      badkamer.
                    </p>
                    <p className="text-lg text-gray-500 mb-3">
                      Benamingen van dit soort typen stucwerk verschillen nogal.
                      Vraag daarom uw stucadoor naar de mogelijkheden.
                    </p>
                  </div>
                  <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                    <Link href="/contact">
                      <div className="rounded-md shadow">
                        <a className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                          Neem contact op
                        </a>
                      </div>
                    </Link>

                    <div className="rounded-md shadow ml-4">
                      <a
                        href="tel:+31647611940"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
                      >
                        bel direct
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                  <svg
                    className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        ></rect>
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="384"
                      fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                    ></rect>
                  </svg>
                  <blockquote className="relative bg-white rounded-lg shadow-lg">
                    <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                      <img src="" alt="JRM Afbouw" className="h-8" />
                      <div className="relative text-lg text-gray-700 font-medium mt-8">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                        </svg>
                        <p className="relative">
                          Wij van JRM Afbouw staan op werkdagen voor u klaar!
                          Neem vooral een vrijblijvend contact met ons op voor
                          advies of offerte
                        </p>
                      </div>
                    </div>
                    <cite className="relative flex items-center sm:items-start bg-red-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                      <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                        <img
                          className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-red-300"
                          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=160&amp;h=160&amp;q=80"
                          alt=""
                        />
                      </div>
                      <span className="relative ml-4 text-red-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                        <p className="text-white font-semibold sm:inline">
                          Eva Smits
                        </p>
                        {/* space */}
                        <p className="sm:inline"> Inplanner bij JRM Afbouw</p>
                      </span>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
