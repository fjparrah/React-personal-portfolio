type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Francisco Parra - Portfolio",
    fullName: "Francisco Parra",
    email: "fjparrah@gmail.com",
  },
  hero: {
    name: "Francisco Parra",
    p: ["Ingeniero Civil Industrial", "Innovación, Data Lover y Desarrollador de Software"],
  },
  contact: {
    p: "Ponte en contacto",
    h2: "Contacto",
    form: {
      name: {
        span: "Nombre",
        placeholder: "¿Cual es tu nombre?",
      },
      email: { span: "Correo Electronico", placeholder: "¿Cual es tu correo electronico?" },
      message: {
        span: "Mensaje",
        placeholder: "Escribe tu mensaje",
      },
    },
  },
  sections: {
    about: {
      p: "",
      h2: "Introducción",
      content: `Soy un desarrollador de software con experiencia en Python,
      JavaScript y experiencia en frameworks como React, Node.js y
      Aprendo rápido y colaboro estrechamente con  clientes para
      crear soluciones eficientes, escalables y fáciles de usar que resuelvan
      problemas del mundo real. ¡Trabajemos juntos para hacer realidad tus ideas!`,
    },
    experience: {
      p: "",
      h2: "Experiencia laboral",
    },
    feedbacks: {
      p: " ",
      h2: "Testimonios.",
    },
    works: {
      p: "",
      h2: "Proyectos",
      content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de
    Ejemplos del mundo real. Aqui una descripcion de cada proyecto con
    enlaces a repositorios de código y demostraciones en vivo. refleja mi
    capacidad para resolver problemas complejos, trabajar con diferentes tecnologías,
    y gestionar proyectos de forma eficaz.`,
    },
  },
};
