import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { List } from './StyledComponents'
import {
  MenuItem,
  Planet,
  Profile,
  Settings,
  Forum,
  LeaderBoard,
  Theme,
  SignOut,
} from '@/components'
import { PATHNAMES, CONTENT_RU } from '@/utils'
import { MenuProps } from './types'
import { DarkModeType } from '@/types'
import { useSignoutMutation } from '@/store'

export const Menu = memo(
  ({ darkMode, onChangeTheme }: MenuProps & DarkModeType) => {
    const [logoutTrigger] = useSignoutMutation()
    const navigate = useNavigate()
    const onClickLogout = () => {
      logoutTrigger(false).then(() => {
        localStorage.removeItem(CONTENT_RU.IS_LOGIN_IN)
        navigate(PATHNAMES.SIGNIN)
      })
    }

    return (
      <List>
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.MAIN}
          icon={<Planet darkMode={darkMode} />}
          textIntl="PLAY_GAME_MENU_ITEM"
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.PROFILE}
          icon={<Profile darkMode={darkMode} />}
          textIntl="PROFILE_MENU_ITEM"
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.SETTINGS}
          icon={<Settings darkMode={darkMode} />}
          textIntl="SETTINGS_MENU_ITEM"
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.FORUM}
          icon={<Forum darkMode={darkMode} />}
          textIntl="FORUM_MENU_ITEM"
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.LEADER_BOARD}
          icon={<LeaderBoard darkMode={darkMode} />}
          textIntl="LEADER_BOARD_MENU_ITEM"
        />
        <MenuItem
          darkMode={darkMode}
          onClick={onChangeTheme}
          icon={<Theme darkMode={darkMode} />}
          textIntl="COLOR_SCHEME_MENU_ITEM"
        />
        <MenuItem
          darkMode={darkMode}
          onClick={onClickLogout}
          icon={<SignOut darkMode={darkMode} />}
          textIntl="SIGNOUT_MENU_ITEM"
        />
      </List>
    )
  }
)
