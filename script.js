function getUserData(userID) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`User with ID ${userID} not found`);
            }
            return response.json();
        });
}

// Пример использования:
console.log("Получение данных о пользователе")
const userID = 1;
getUserData(userID)
    .then(userData => {
        console.log(userData);
    })
    .catch(error => {
        console.error(error.message);
    });

// Отправка данных на сервер
function saveUserData(userData) {
    return fetch('https://httpbin.org/post', { 
        method: 'POST', // Метод запроса
        headers: {
            'Content-Type': 'application/json' // Указываем формат данных
        },
        body: JSON.stringify(userData) // Преобразуем объект в JSON строки
    })
    .then(response => {
        if (!response.ok) {
            // Отклоняем промис, если статус не 200
            return Promise.reject('Ошибка при сохранении данных о пользователе');
        }
        return response.json(); // Возвращаем ответ в формате JSON
    })
    .then(data => {
        return data; // Возвращаем данные, если успешно
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Ошибка:', error);
        throw error; // Отклоняем промис с ошибкой
    });
}

// Пример использования функции

const user = {
    name: "Иван Иванов",
    email: "ivan@example.com",
    age: 30
};

saveUserData(user)
    .then(responseData => {
        console.log('Данные успешно сохранены:', responseData);
    })
    .catch(error => {
        console.error('Ошибка при отправке данных о пользователе:', error);
    });
    

//"Изменение стиля элемента через заданное время"  
function changeStyleDelayed(elementId, delay) {
   
    const element = document.getElementById(elementId);
    
      if (element) {
             setTimeout(() => {
            element.style.backgroundColor = 'lightblue'; //изменение фона
            element.style.color = 'white'; // изменение цвета текста
            element.style.fontSize = '20px'; // изменение размера шрифта
        }, delay);
    } else {
        console.error(`Элемент с ID ${elementId} не найден.`);
    }
}

// Пример использования функции
changeStyleDelayed('myElement', 2000);// Через 2 секунды изменяет стиль элемента с id 'myElement'"

