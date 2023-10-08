const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contact: [],
      urlBase: "https://playground.4geeks.com/apis/fake/contact/",
    },
    actions: {
      getContact: async () => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/phantom"
          );
          let data = await response.json();

          setStore({
            contact: data,
          });
        } catch (error) {
          console.log(error);
        }
      },

      deleteContact: async (contact_id) => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${contact_id}`,
            { method: "DELETE" }
          );
          getActions().getContact();
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
