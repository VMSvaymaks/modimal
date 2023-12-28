function toggleHeart() {
  var heartIcon = document.getElementById("heartIcon");

  // Проверяем наличие класса fa-heart--active
  var isActive = heartIcon.classList.contains("heart--active");

  // Если у иконки есть класс fa-heart--active, убираем его, иначе добавляем
  if (isActive) {
    heartIcon.classList.remove("heart--active");
    console.log("Сердце деактивировано");
    // Здесь можно добавить дополнительные действия при деактивации сердца
  } else {
    heartIcon.classList.add("heart--active");
    console.log("Сердце активировано");
    // Здесь можно добавить дополнительные действия при активации сердца
  }
}
