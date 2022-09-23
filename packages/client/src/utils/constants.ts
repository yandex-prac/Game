const PATHNAMES = {
  SIGNIN: '/',
  SIGNUP: '/sign-up',
  MAIN: '/main',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile-edit',
  PASSWORD_EDIT: '/profile-edit-password',
  SETTINGS: '/settings',
  FORUM: '/forum',
  LEADER_BOARD: '/leader-board',
  PATH_NOT_FOUND: '*',
  ERROR_404: '/error404',
}

const CONTENT_RU = {
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

  // register и profile
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

  // profile
  MAIL: 'Почта',
  NICKNAME: 'Имя в игре',
  CHANGE_DATA: 'Изменить данные',
  CHANGE_PASSWORD: 'Изменить пароль',
  QUIT: 'Выйти',
  OLD_PASSWORD: 'Старый пароль',
  NEW_PASSWORD: 'Новый пароль',
  REPEAT_PASSWORD: 'Повторите новый пароль',
  SAVE: 'Сохранить',

  // Chat
  CREATE_CHAT: 'Создать чат',
  EMPTY_MESSAGES: 'Выберите чат чтобы отправить сообщение',
  CHATS: 'Чаты',
}

const API = {
  API_BASE_URL: 'https://ya-praktikum.tech/api/v2',
  // auth
  SIGNIN: '/auth/signin',
  SIGNUP: '/auth/signup',
  SIGNOUT: '/auth/logout',
  GET_USER_INFO: '/auth/user',
  //profile
  GET_USER_BY_ID: '/user',
  CHANGE_USER_PROFILE: '/user/profile',
  CHANGE_USER_AVATAR: '/user/profile/avatar',
  CHANGE_USER_PASSWORD: '/user/password',
  SEARCH_FOR_USER_BY_LOGIN: '/user/search',
}

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export { CONTENT_RU, PATHNAMES, API, METHODS }
