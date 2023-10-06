const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contact: [],
    },
    actions: {
      getContact: async () => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/phantom"
          );
          let data = await response.json();
          console.log(data);

          setStore({
            contact: data,
          });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
