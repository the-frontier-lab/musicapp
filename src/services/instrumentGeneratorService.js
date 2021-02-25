export const instruments = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Violin" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Piano" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Clarinet" }
  ];
  
  export function getInstruments() {
    return instruments.filter(i => i);
  }
  