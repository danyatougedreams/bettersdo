# Better SDO — каким должен был быть редизайн СДО

**Для _рефреша редизайна_ `online-edu.mirea.ru` я взял за основу обновленную страницу входа `login.mirea.ru`: цвета, общую стилистику.** Сделано ведь очень круто! Почему нельзя было сразу так сделать?

<p align="middle">
    <img src="assets/course-after.png" width="100%"/>
</p>

### _Made by [DANYATOUGEDREAMS](https://danyatougedreams.ru)_

---

### До / После

<p align="middle">
    <img src="assets/login-before.png" width="48%"/>
    <img src="assets/login-after.png" width="48%"/>
</p>

<p align="middle">
    <img src="assets/home-before.png" width="48%"/>
    <img src="assets/home-after.png" width="48%"/>
</p>

<p align="middle">
    <img src="assets/course-before.png" width="48%"/>
    <img src="assets/course-after.png" width="48%"/>
</p>

## Хочу! Как установить?

## Как собрать CSS файл

### 1. Установи [SASS](https://sasscss.org/install)

```bash
# Windows с установленным choco
choco install sass
```

```bash
# MacOS
brew install sass/sass/sass
```

### 2. Собери

```bash
git clone https://github.com/danyatougedreams/bettersdo

cd bettersdo

sass --style compressed --no-source-map source/styles/main.scss:source/bettersdo.css
```
