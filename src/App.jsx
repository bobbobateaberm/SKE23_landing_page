import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Body from "./components/body";
import Footer from "./components/footer";

import "./App.css";

const Committee = ({ image_path, position }) => (
  <div
    className="
      group flex flex-col items-center
      bg-[#0f172a] border border-[#1e293b]
      rounded-3xl p-6 backdrop-blur-xl
      shadow-xl hover:border-blue-500
      hover:shadow-blue-900/40 hover:-translate-y-2
      transition duration-500
    "
  >
    <img
      src={image_path}
      alt={position}
      className="
        w-[170px] h-[170px]
        sm:w-[220px] sm:h-[220px]
        rounded-full object-cover
        border-4 border-[#172554]
        group-hover:border-blue-500
        transition
      "
    />

    <h3 className="mt-6 text-white text-lg font-semibold">
      {position}
    </h3>
  </div>
);

function App() {
  const management = [
    ["President", "/c1.jpg", "Suppamok Tosranon (Jimmy) 6810545921"],
    ["VC President 1", "/c6.jpg", "Piyatida Muanjaingam (Ploy) 6810545760"],
    ["VC President 2", "/c6.JPG", "Siraphob Phonphakdee (Peem) 6810545930"],
    ["Secretary 1", "/c2.jpg", "Phunnipath Theankaew (Nice) 6810545816"],
    ["Secretary 2", "/c3.png", "Apichai Pattanakamolkul (Ess) 6810545972"],
    ["Treasurer", "/c1.jpg", "Chatthaya Tipatnaranan (Ping) 6810545531"],
    ["Corporate Communication", "/c6.jpg", "Thunyasorn Chaliasomboon (Dear) 6810545689"],
    ["Graphic Design", "/c2.jpg", "Chayapol Kaewsakul (Kew) 6810545557"]
  ];

const [selectedDev, setSelectedDev] =
  useState("Select developer");

const developers = [
  ["Lead Developer", "/c4.jpg", "John (Lead)"],
  ["Developer 1", "/c5.jpg", "Alice"],
  ["Developer 2", "/c2.jpg", "Bob"],
  ["Developer 3", "/c3.png", "Charlie"],
];

  const [selected, setSelected] = useState(
    "Select committee member"
  );

  return (
    <main className="bg-[#020617]">
      <Navbar />
      <Hero />

      <section className="bg-gradient-to-b from-[#020617] via-[#081124] to-[#09172b]">
        <div className="content">
          <Body />
        </div>

        {/* MANAGEMENT */}

        <section className="px-6 py-24">
          <h2 className="text-center text-white text-5xl font-bold mb-16">
            Management Team
          </h2>

      <div
  className="
    max-w-7xl
    mx-auto
    min-h-[70vh]
    flex
    flex-wrap
    items-center
    justify-center
    gap-10
  "
>
  {management.map(([role, img, name], i) => (
    <button
      key={i}
      onClick={() => setSelected(name)}
      className="
        flex
        justify-center
        items-center
      "
    >
      <Committee
        image_path={img}
        position={role}
      />
    </button>
  ))}
</div>

          <div className="mt-16 max-w-3xl mx-auto terminal animate-fade-up">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span />
                <span />
                <span />
              </div>

              <p className="terminal-title">
                terminal — committee.exe
              </p>
            </div>

            <div className="terminal-body">
              <p className="terminal-line">
                <span className="terminal-user">
                  visitor@committee:
                </span>

                <span className="terminal-path">
                  ~/members
                </span>

                $ <span className="typing">select_member</span>
              </p>

              <p className="terminal-output">
                &gt; {selected}
                <span className="cursor"></span>
              </p>
            </div>
          </div>
        </section>
{/* DEVELOPMENT */}

<section className="px-6 pb-32">

  <h2 className="text-center text-white text-5xl mb-16">
    Development Team
  </h2>

  <div
    className="
      max-w-7xl
      mx-auto
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-10
    "
  >
    {developers.map(([role, img, name], i) => (
      <button
        key={i}
        onClick={() => setSelectedDev(name)}
      >
        <Committee
          image_path={img}
          position={role}
        />
      </button>
    ))}
  </div>

  {/* DEV TERMINAL */}

  <div
    className="
      mt-16
      max-w-4xl
      mx-auto
      overflow-hidden
      rounded-[28px]
      border
      border-cyan-900
      bg-[#030712]
      shadow-[0_0_100px_rgba(0,100,255,.12)]
    "
  >

    <div
      className="
        flex
        items-center
        justify-between
        px-6
        py-4
        border-b
        border-slate-800
      "
    >
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <p
        className="
          text-cyan-400
          text-sm
          font-mono
        "
      >
        developer-shell v2.6
      </p>
    </div>

    <div
      className="
        p-8
        font-mono
        text-green-400
        bg-[radial-gradient(circle_at_top,rgba(20,60,140,.15),transparent)]
      "
    >

      <p className="mb-4">
        <span className="text-cyan-400">
          visitor@dev:
        </span>

        <span className="text-blue-500">
          ~/team
        </span>

        {" "}$
        ls developers
      </p>

      <p className="text-slate-500">
        Lead Developer
      </p>

      <p className="text-slate-500">
        Developer 1
      </p>

      <p className="text-slate-500">
        Developer 2
      </p>

      <p className="text-slate-500 mb-6">
        Developer 3
      </p>

      <p>
        <span className="text-cyan-400">
          visitor@dev:
        </span>

        <span className="text-blue-500">
          ~/team
        </span>

        {" "}$
        cat selected_user.json
      </p>

      <div
        className="
          mt-5
          rounded-2xl
          border
          border-cyan-950
          bg-[#06111f]
          p-5
        "
      >
        <pre className="text-cyan-300 overflow-auto">
{`{
  "developer": "${selectedDev}",
  "status": "active",
  "access": "granted"
}`}
        </pre>
      </div>

      <div className="mt-5 text-green-500 animate-pulse">
        ▌
      </div>

    </div>
  </div>

</section>

        {/* DISCORD */}

        <section className="px-6 pb-32">
          <div
            className="
              max-w-7xl mx-auto
              rounded-[40px] p-10
              bg-gradient-to-br
              from-[#000000]
              to-[#101827]
              border border-blue-950
              shadow-2xl
            "
          >
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                Discord Community
              </h1>

              <p className="mt-4 text-slate-400">
                Join the community and connect with everyone
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
              {[1, 2, 3].map((id) => (
                <iframe
                  key={id}
                  src="https://discord.com/widget?id=1397550111344558201&theme=dark"
                  className="
                    w-full max-w-[350px]
                    h-[500px]
                    rounded-3xl
                    border border-blue-900
                    shadow-xl
                  "
                  sandbox="
                    allow-popups
                    allow-popups-to-escape-sandbox
                    allow-same-origin
                    allow-scripts
                  "
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}

export default App;