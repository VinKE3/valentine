import { useState } from "react";
import JSConfetti from "js-confetti";

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [imagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45);

  const [valueSi, setValueSi] = useState(false);

  let random = [
    {
      id: 1,
      description: "Como que no boluda, encima te haces de rogar.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-5.gif",
    },

    {
      id: 2,
      description: "Te dejo pensarlo otros 5 minutos mas.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-23.gif",
    },
    {
      id: 3,
      description: "Que gede que sos, que te cuesta decir que si.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-60.gif",
    },
    {
      id: 4,
      description: "Vamos mami, no tengo todo el dia.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-77.gif",
    },
    {
      id: 5,
      description: "No me acordaba que eras tan dificil amor.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-4.gif",
    },
    {
      id: 6,
      description: "No que ibamos a pasarla calatitos?",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-14.gif",
    },
    {
      id: 7,
      description:
        "No seas hija de puta amor, me vas a dejar con toda la leche.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-46.gif",
    },
    {
      id: 8,
      description: "Vamos mami no la hagas tan larga como la que me cuelga.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-35.gif",
    },
    {
      id: 9,
      description: "No te hagas la dificil, sabes que queres amor.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-10.gif",
    },
    {
      id: 10,
      description: "No lo penses mucho amor, decime que si.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-77.gif",
    },
    {
      id: 11,
      description: "Te mereces lo mejor, y lo mejor soy yo, decime que si.",
      img: "https://usagif.com/wp-content/uploads/gifs/sad-cat-41.gif",
    },
  ];

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index]);
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10);
    }
    setRandomValor(random[index]);
  };

  return (
    <>
      <main
        id="canvas"
        className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
      >
        {!valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center py-5">
              ¿Queres pasar San Valentin Conmigo?
            </h1>
            <img
              src={
                Object.keys(randomValor).length === 0
                  ? "https://usagif.com/wp-content/uploads/gifs/happy-cat-9.gif"
                  : randomValor.img
              }
              alt="San Valentin"
              className="mx-auto"
              width={400}
              height={400}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button
                onClick={() => {
                  setValueSi(true);

                  jsConfetti.addConfetti({
                    emojis: ["😍", "🥰", "❤️", "😘"],
                    emojiSize: 70,
                    confettiNumber: 80,
                  });
                }}
                className={`bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`}
                style={{ height: agrandar }}
              >
                Si
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0
                  ? "No, pero puedes convencerme..."
                  : randomValor.description}
                <span hidden>
                  {
                    (document.title =
                      Object.keys(randomValor).length === 0
                        ? "¿Queres pasar San Valentin Conmigo?"
                        : randomValor.description)
                  }
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">
              Gracias mi amor, te amo, nos vemos mas tarde ❤️!
            </h1>
            <p className="text-3xl text-white font-bold">
              Me gustaria pasar el resto de mis dias con alguien que no me
              necesite para nada, pero que me quiera para todo.
            </p>
            <p className="text-3xl text-white font-bold">
              Y ese alguien sos vos mi amor ❤️
            </p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-md text-xl"
              onClick={() => window.location.reload()}
            >
              Para finalizar, tenes que jurarme eterno amor, sin excusas jeje
            </button>
            <img
              src="https://i.gifer.com/59ER.gif"
              alt=""
              className="mx-auto"
            />
            <span hidden>
              {
                (document.title =
                  "Gracias mi amor, te amo, nos vemos mas tarde  ❤️!")
              }
            </span>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
