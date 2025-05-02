// Интерфейсы
interface Square {
    side: number;
    area: number;
}

interface Rect {
    a: number;
    b: number;
    area: number;
}

// Функция для возврата квадрата
function calculateArea(side: number): Square;
// Функция для возврата прямоугольник
function calculateArea(a: number, b: number, c: number, d: number): Rect; // --- Идет перегрузка функции

// Функция для рассчета площади квадрата - прямоугольника
function calculateArea(
    a: number,
    b?: number,
    c?: number,
    d?: number
): Square | Rect {
    // Условия
    if (b) {
        // Умножаем стороны прямоугольника друг на друга
        const rect: Rect = {
            a,
            b,
            area: a * b,
        };
        return rect;
    } else {
        // Умножнаем равные стороны квадраты на друга
        const square: Square = {
            side: a,
            area: a * a,
        };

        return square;
    }
}

// Вызов функций
calculateArea(1);
calculateArea(1, 2, 3, 4); // Передаем 4 цифры как 4 аргумента a, b, c, d
