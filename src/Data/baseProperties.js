const baseProperties = {
  Br: {
    construction: "Em construção...",

    changeLanguage: "English",
    changeCode: "En",

    name: "!Humman Community",
    title: {
      develop: "Desenvolva,",
      forward: "Avance,",
      reinvent: "Reinvente-se.",
    },
    description:
      "Venha fazer parte de uma comunidade cheia de programadores motivados a atingir um único objetivo: aprimorar suas habilidades em um ambiente acolhedor e diversificado",
    social: [
      { name: "telegram", url: "https://t.me/Is_Not_Human" },
      { name: "whatsapp", url: "https://t.me/Is_Not_Human" },
    ],
    join: "Entre!",

    menus: [
      { name: "Home", url: "#home" },
      { name: "Projetos", url: "#projects" },
      { name: "Regras", url: "#rules" },
      { name: "Siga-nos", url: "#contact" },
    ],

    projects: [
      {
        name: "Lara",
        description:
          "O bot oficial da comunidade, criado para administrar o grupo e oferecer serviços.",
        image:
          "https://github.com/Weslley-Borges/Lara/raw/master/temp/img/Lara.png",
      },
    ],

    rules: [
      {
        rule: "As regras valem para todos os membros, ninguém está acima delas",
        description: [],
      },
      {
        rule: "Tópicos e comportamentos expressamente proibidos no grupo (resultam em banimento imediato na maioria dos casos):",
        description: [
          "Ataques pessoais ou perseguição de qualquer forma.",
          "Spam de qualquer forma (comercial, religioso, político, etc).",
          "Pregação religiosa.",
          "Pregação política.",
          "Qualquer atividade ilegal, como promoção de pirataria de qualquer forma, estelionato, “carding”, troca de dados obtidos de forma ilegal, venda ou consumo de drogas, etc (independente da sua opinião sobre o assunto).",
        ],
      },
      {
        rule: "Não recomendamos:",
        description: [
          "Discussões acaloradas fora do tópico do grupo.",
          "Envio de mensagens sem sentido.",
        ],
      },
    ],
  },

  En: {
    construction: "Building...",

    changeLanguage: "Português",
    changeCode: "Br",

    name: "!Humman Community",
    title: {
      develop: "Develop,",
      forward: "Move forward,",
      reinvent: "Reinvent yourself.",
    },
    description:
      "Join a community full of devs looking for a common goal: hone your skills in a welcoming and diverse environment",
    social: [
      { name: "telegram", url: "https://t.me/Is_Not_Human" },
      { name: "whatsapp", url: "https://t.me/Is_Not_Human" },
    ],
    join: "Join!",

    menus: [
      { name: "Home", url: "#home" },
      { name: "Projects", url: "#projects" },
      { name: "Rules", url: "#rules" },
      { name: "Follow us", url: "#contact" },
    ],

    projects: [
      {
        name: "Lara",
        description:
          "The oficial bot of th community, created to be an adm and offer services.",
        image:
          "https://github.com/Weslley-Borges/Lara/raw/master/temp/img/Lara.png",
      },
    ],

    rules: [
      {
        rule: "All the rules are valid to all members, no one are above them",
        description: [],
      },
      {
        rule: "Prohibited topics and behaviors (may result in imediatic ban):",
        description: [
          "Personal attacks or harassment in any form.",
          "Spam (commercial, religious, politic, etc).",
          "Religious preaching.",
          "Preaching politics.",
          "Any illegal activity, like piratary, stellion, carding(exchange of data obtained with illegal methods) sell or consumn of drugs, etc.",
        ],
      },
      {
        rule: "Not recommendet:",
        description: ["Heated discussions off-topic.", "Nonsense messages."],
      },
    ],
  },
};

export default baseProperties;
