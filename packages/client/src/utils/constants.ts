const PATHNAMES = {
  SIGNIN: '/',
  SIGNUP: '/sign-up',
  MAIN: '/main',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  FORUM: '/forum',
  LEADER_BOARD: '/leader-board',
  PATH_NOT_FOUND: '*',
  ERROR_404: '/error404',
}

const CONTENT = {
  PAGE_NOT_FOUND_TITLE: '404',
  PAGE_NOT_FOUND_SUBTITLE: 'Не туда попали',
  LOGO_ALT: 'Логотип игры pacman',
  PLAY_GAME_MENU_ITEM: 'Начать игру',
  PROFILE_MENU_ITEM: 'Профиль',
  SETTINGS_MENU_ITEM: 'Настройки',
  FORUM_MENU_ITEM: 'Форум',
  LEADER_BOARD_MENU_ITEM: 'Лидеры',
  COLOR_SCHEME_MENU_ITEM: 'Цветовая схема',
  SIGNOUT_MENU_ITEM: 'Выйти',
  AVATAR_USER_ALT: 'Аватар пользователя',
  USER_NAME_TEST_DATA: 'Patrushva Maria',
  USER_EMAIL_TEST_DATA: 'patrushva@gmail.com',
  LEADER_BOARD_TITLE: 'Лидеров не найдено. Будь первывым 😉',
  LEADER_BOARD_LINK: 'Новая игра',
  PAGE_ERROR_LINK: 'Назад',

  // login
  ENTER: 'Вход',
  AUTH: 'Авторизоваться',
  NO_ACCOUNT: 'Нет аккаунта?',

  // register
  IS_REQUIRED_TEXT: 'Поле не должно быть пустым',
  REGISTER: 'Регистрация',
  POST: 'Почта',
  POST_INCORRECT: 'Некорректный формат email',
  LOGIN: 'Логин',
  MIN_LENGTH: 'Слишком коротко',
  MAX_LENGTH: 'Слишком длинно',
  FORBIDDEN_SYMBOL: 'Недопустимые символы',
  NAME: 'Имя',
  SURNAME: 'Фамилия',
  PHONE: 'Телефон',
  PASSWORD: 'Пароль',
  PASSWORD_MIN: 'Минимум 8 символов',
  PASSWORD_SYMBOL: 'Должен содержать заглавную букву, цифру и символ',
  TO_LOGIN: 'Войти',
  MAKE_REGISTER: 'Зарегистрироваться',
}

const API = {
  API_BASE_URL: 'https://ya-praktikum.tech/api/v2',
  // auth
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
}

export { CONTENT, PATHNAMES, API }
