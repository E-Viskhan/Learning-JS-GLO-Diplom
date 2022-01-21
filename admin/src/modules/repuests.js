const getData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Произошла ошибка, данных нет!');
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};

const sendData = async ({ url, data, method = "POST" }) => {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error('Произошла ошибка, данных нет!');
    }
  } catch (error) {
    console.error(error.message);
  }
};

export { getData, sendData };