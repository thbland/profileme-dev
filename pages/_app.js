import React, { useReducer, createContext } from "react";
import "../styles/globals.css";

export const StateContext = createContext(null);

export const ACTIONS = {
  // Introduction actions
  ADD_INTRODUCTION: "add-introduction",
  // Select render
  SELECT_RENDER_MODE: "select-render-mode",
  // Skills actions
  ADD_SKILL: "add-skill",
  REMOVE_SKILL: "remove-skill",
  // Profile actions
  ADD_PROFILE: "add-profile",
  // UPDATE MARKDOWN
  UPDATE_MARKDOWN_CODE: "update-markdown-code",
};

export const frontendIcons = [
  {
    name: "HTML5",
    folder: "html5",
    type: "html5-plain",
    iTag: "html5-plain",
  },
  {
    name: "Javascript",
    folder: "javascript",
    type: "javascript-plain",
    iTag: "javascript-plain",
  },
  {
    name: "Typescript",
    folder: "typescript",
    type: "typescript-plain",
    iTag: "typescript-plain",
  },
  {
    name: "React",
    folder: "react",
    type: "react-original",
    iTag: "react-original",
  },
  {
    name: "NextJs",
    folder: "nextjs",
    type: "nextjs-original",
    iTag: "nextjs-original",
  },
  {
    name: "Vue",
    folder: "vuejs",
    type: "vuejs-plain",
    iTag: "vuejs-plain",
  },
  {
    name: "Angular",
    folder: "angularjs",
    type: "angularjs-plain",
    iTag: "angularjs-plain",
  },
  {
    name: "JQuery",
    folder: "jquery",
    type: "jquery-plain",
    iTag: "jquery-plain",
  },
  {
    name: "Swift",
    folder: "swift",
    type: "swift-original",
    iTag: "swift-plain",
  },
  {
    name: "CSS3",
    folder: "css3",
    type: "css3-plain",
    iTag: "css3-plain",
  },
  {
    name: "Sass",
    folder: "sass",
    type: "sass-original",
    iTag: "sass-original",
  },
  {
    name: "TailwindCSS",
    folder: "tailwindcss",
    type: "tailwindcss-plain",
    iTag: "tailwindcss-plain",
  },
  {
    name: "Bootstrap",
    folder: "bootstrap",
    type: "bootstrap-plain",
    iTag: "bootstrap-plain",
  },
];

// Color State
const initialState = {
  section: "introduction",
  renderMode: "preview",
  // Introduction State
  introduction: {
    firstName: "",
    surname: "",
    location: "",
    workingOn: "",
    learning: "",
    collaborateOn: "",
    aboutMe: "",
    additionalInfo: "",
  },
  // Skills State
  skills: {
    frontend: [],
    backend: [],
  },
  // Profiles State
  profiles: {
    gitHub: "",
    portfolio: "",
    linkedIn: "",
    medium: "",
    hashnode: "",
    twitter: "",
    facebook: "",
    instagram: "",
    tiktok: "",
  },
  markdownContent: {
    introduction: null,
    profiles: null,
    skills: {
      frontend: [],
    },
  },
};
// Color Reducer
function reducer(state, action) {
  switch (action.type) {
    // Show Sections
    case ACTIONS.SHOW_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    // Select Render Mode
    case ACTIONS.SELECT_RENDER_MODE:
      return {
        ...state,
        renderMode: action.payload,
      };
    // Introduction Actions
    case ACTIONS.ADD_INTRODUCTION:
      return {
        ...state,
        introduction: {
          ...state.introduction,
          [action.payload.title]: action.payload.value,
        },
      };
    // Skills Sections
    case ACTIONS.ADD_SKILL:
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.payload.type]: [
            ...state.skills[action.payload.type],
            action.payload.icon,
          ],
        },
      };
    case ACTIONS.REMOVE_SKILL:
      return {
        ...state,
        skills: {
          [action.payload.type]: state.skills[action.payload.type].filter(
            (item) => item !== action.payload.icon
          ),
        },
      };
    // Profiles
    case ACTIONS.ADD_PROFILE:
      return {
        ...state,
        profiles: {
          ...state.profiles,
          [action.payload.title]: action.payload.value,
        },
      };
    // case ACTIONS.UPDATE_MARKDOWN_CODE:
    //   return {
    //     ...state,
    //     markdownContent: {
    //       ...state.markdownContent,
    //       [action.payload.title]: action.payload.value,
    //     },
    //   };
    default:
      throw new Error();
  }
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}

export default MyApp;
