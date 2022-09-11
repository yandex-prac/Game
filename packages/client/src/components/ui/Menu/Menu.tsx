import React, { memo } from 'react'
import { List, Icon } from './StyledComponents'
import { MenuItem } from '../../'
import { PATHNAMES, CONTENT } from '../../../utils'
import { MenuProps } from './types'
import { DarkModeType } from '../../../types'

export const Menu = memo(
  ({ darkMode, onChangeTheme }: MenuProps & DarkModeType) => {
    return (
      <List>
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.MAIN}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0043 3.67959C13.4593 3.76905 13.09 4.28337 13.1795 4.82836C13.2689 5.37335 13.7832 5.74264 14.3282 5.65318L14.0043 3.67959ZM17.5434 5.38676L18.4094 4.88676V4.88676L17.5434 5.38676ZM1.66626 14.5534L2.53228 14.0534L1.66626 14.5534ZM4.05613 11.2814C4.43764 10.8821 4.4232 10.2491 4.02386 9.86757C3.62453 9.48606 2.99153 9.50051 2.61002 9.89984L4.05613 11.2814ZM10 15.6667C6.87038 15.6667 4.33333 13.1296 4.33333 10H2.33333C2.33333 14.2342 5.76581 17.6667 10 17.6667V15.6667ZM4.33333 10C4.33333 6.8704 6.87038 4.33334 10 4.33334V2.33334C5.76581 2.33334 2.33333 5.76583 2.33333 10H4.33333ZM10 4.33334C13.1296 4.33334 15.6667 6.8704 15.6667 10H17.6667C17.6667 5.76583 14.2342 2.33334 10 2.33334V4.33334ZM15.6667 10C15.6667 13.1296 13.1296 15.6667 10 15.6667V17.6667C14.2342 17.6667 17.6667 14.2342 17.6667 10H15.6667ZM14.3282 5.65318C15.0983 5.52679 15.6986 5.52739 16.116 5.61194C16.5355 5.69691 16.6484 5.83661 16.6774 5.88676L18.4094 4.88676C17.9894 4.15922 17.2512 3.80128 16.5131 3.65175C15.7729 3.50181 14.9092 3.53107 14.0043 3.67959L14.3282 5.65318ZM16.6774 5.88676C16.7069 5.93798 16.7739 6.11368 16.6246 6.53988C16.4766 6.96203 16.1549 7.50339 15.6309 8.12743C14.5887 9.3688 12.8899 10.7678 10.7716 11.9908L11.7716 13.7229C14.0376 12.4146 15.9349 10.8757 17.1626 9.41344C17.7737 8.68566 18.2553 7.93376 18.512 7.20132C18.7673 6.47293 18.8401 5.6327 18.4094 4.88676L16.6774 5.88676ZM10.7716 11.9908C8.65322 13.2139 6.59223 13.9856 4.99602 14.2675C4.1936 14.4092 3.56388 14.4172 3.1243 14.3343C2.68051 14.2505 2.56185 14.1047 2.53228 14.0534L0.80023 15.0534C1.2309 15.7994 1.99498 16.1564 2.75342 16.2996C3.51608 16.4435 4.40809 16.4023 5.34389 16.237C7.22413 15.9049 9.50556 15.0312 11.7716 13.7229L10.7716 11.9908ZM2.53228 14.0534C2.49869 13.9953 2.41841 13.7687 2.65676 13.2181C2.887 12.6862 3.34977 12.0208 4.05613 11.2814L2.61002 9.89984C1.81331 10.7338 1.18004 11.5949 0.821325 12.4236C0.470711 13.2336 0.30856 14.2018 0.80023 15.0534L2.53228 14.0534Z" />
            </Icon>
          }
          text={CONTENT.PLAY_GAME_MENU_ITEM}
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.PROFILE}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M14 15.8333C14 16.3856 14.4477 16.8333 15 16.8333C15.5523 16.8333 16 16.3856 16 15.8333H14ZM4 15.8333C4 16.3856 4.44772 16.8333 5 16.8333C5.55228 16.8333 6 16.3856 6 15.8333H4ZM16 15.8333C16 14.4745 15.1738 13.3667 14.0902 12.6443C12.9996 11.9172 11.5506 11.5 10 11.5V13.5C11.2108 13.5 12.2618 13.829 12.9808 14.3084C13.7069 14.7924 14 15.3512 14 15.8333H16ZM10 11.5C8.4494 11.5 7.00036 11.9172 5.90977 12.6443C4.82616 13.3667 4 14.4745 4 15.8333H6C6 15.3512 6.29313 14.7924 7.01917 14.3084C7.73821 13.829 8.78918 13.5 10 13.5V11.5ZM10 8.99999C8.71134 8.99999 7.66667 7.95533 7.66667 6.66666H5.66667C5.66667 9.0599 7.60677 11 10 11V8.99999ZM7.66667 6.66666C7.66667 5.378 8.71134 4.33333 10 4.33333V2.33333C7.60677 2.33333 5.66667 4.27343 5.66667 6.66666H7.66667ZM10 4.33333C11.2887 4.33333 12.3333 5.378 12.3333 6.66666H14.3333C14.3333 4.27343 12.3932 2.33333 10 2.33333V4.33333ZM12.3333 6.66666C12.3333 7.95533 11.2887 8.99999 10 8.99999V11C12.3932 11 14.3333 9.0599 14.3333 6.66666H12.3333Z" />
            </Icon>
          }
          text={CONTENT.PROFILE_MENU_ITEM}
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.SETTINGS}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M15.884 14.9365L16.384 15.8025L15.884 14.9365ZM11.3338 17.5636L10.8338 16.6976L11.3338 17.5636ZM8.66642 17.5636L9.16642 16.6976L8.66642 17.5636ZM4.11621 14.9365L3.61621 15.8025H3.61621L4.11621 14.9365ZM4.11621 5.06358L3.61621 4.19756L4.11621 5.06358ZM8.66642 2.43652L8.16642 1.57049L8.66642 2.43652ZM11.333 2.43652L10.833 3.30254L11.333 2.43652ZM15.8832 5.06358L16.3832 4.19756L15.8832 5.06358ZM9.65381 1.96095L9.86172 2.9391L9.65381 1.96095ZM10.3467 1.96095L10.5546 0.982803L10.3467 1.96095ZM2.86478 6.28061L3.81583 6.58963L2.86478 6.28061ZM3.21126 5.6804L2.46812 5.01127H2.46812L3.21126 5.6804ZM3.21126 14.3197L2.46812 14.9888H2.46812L3.21126 14.3197ZM2.86478 13.7194L3.81583 13.4104L2.86478 13.7194ZM10.3467 18.0391L10.1388 17.061H10.1388L10.3467 18.0391ZM9.65381 18.0391L9.44589 19.0173L9.65381 18.0391ZM17.1354 13.7194L16.1844 13.4104L17.1354 13.7194ZM16.789 14.3197L17.5322 14.9888L16.789 14.3197ZM17.1354 6.28061L18.0865 5.9716L17.1354 6.28061ZM16.789 5.6804L16.0459 6.34954L16.789 5.6804ZM16.2168 7.37294V12.6271H18.2168V7.37294H16.2168ZM15.384 14.0705L10.8338 16.6976L11.8338 18.4296L16.384 15.8025L15.384 14.0705ZM9.16642 16.6976L4.61621 14.0705L3.61621 15.8025L8.16642 18.4296L9.16642 16.6976ZM3.7832 12.6271V7.37294H1.7832V12.6271H3.7832ZM4.61621 5.92961L9.16642 3.30254L8.16642 1.57049L3.61621 4.19756L4.61621 5.92961ZM10.833 3.30254L15.3832 5.92961L16.3832 4.19756L11.833 1.57049L10.833 3.30254ZM9.16642 3.30254C9.70993 2.98875 9.79504 2.95327 9.86172 2.9391L9.44589 0.982803C8.99616 1.0784 8.59439 1.3234 8.16642 1.57049L9.16642 3.30254ZM11.833 1.57049C11.4063 1.32415 11.0047 1.07847 10.5546 0.982803L10.1388 2.9391C10.2051 2.9532 10.2882 2.988 10.833 3.30254L11.833 1.57049ZM9.86172 2.9391C9.9531 2.91967 10.0474 2.91967 10.1388 2.9391L10.5546 0.982803C10.1891 0.905106 9.81143 0.905106 9.44589 0.982803L9.86172 2.9391ZM3.7832 7.37294C3.7832 6.74461 3.79482 6.65429 3.81583 6.58963L1.91372 5.9716C1.77158 6.40904 1.7832 6.8795 1.7832 7.37294H3.7832ZM3.61621 4.19756C3.18847 4.44451 2.77581 4.66954 2.46812 5.01127L3.95441 6.34953C3.99998 6.29892 4.07247 6.24354 4.61621 5.92961L3.61621 4.19756ZM3.81583 6.58963C3.84474 6.50067 3.89197 6.41888 3.95441 6.34953L2.46812 5.01127C2.21799 5.28907 2.02917 5.61628 1.91372 5.9716L3.81583 6.58963ZM4.61621 14.0705C4.07256 13.7566 3.99999 13.7012 3.95441 13.6505L2.46812 14.9888C2.7758 15.3305 3.18838 15.5555 3.61621 15.8025L4.61621 14.0705ZM1.7832 12.6271C1.7832 13.1205 1.77158 13.591 1.91372 14.0284L3.81583 13.4104C3.79482 13.3457 3.7832 13.2554 3.7832 12.6271H1.7832ZM3.95441 13.6505C3.89199 13.5812 3.84475 13.4994 3.81583 13.4104L1.91372 14.0284C2.02916 14.3837 2.21797 14.711 2.46812 14.9888L3.95441 13.6505ZM10.8338 16.6976C10.2901 17.0115 10.2054 17.0468 10.1388 17.061L10.5546 19.0173C11.0044 18.9217 11.4061 18.6766 11.8338 18.4296L10.8338 16.6976ZM8.16642 18.4296C8.59445 18.6767 8.99618 18.9217 9.44589 19.0173L9.86172 17.061C9.79503 17.0468 9.70985 17.0113 9.16642 16.6976L8.16642 18.4296ZM10.1388 17.061C10.0474 17.0804 9.9531 17.0804 9.86172 17.061L9.44589 19.0173C9.81143 19.095 10.1891 19.095 10.5546 19.0173L10.1388 17.061ZM16.2168 12.6271C16.2168 13.256 16.2053 13.3459 16.1844 13.4104L18.0865 14.0284C18.2287 13.5909 18.2168 13.1199 18.2168 12.6271H16.2168ZM16.384 15.8025C16.8118 15.5556 17.2245 15.3305 17.5322 14.9888L16.0459 13.6505C16.0003 13.7011 15.9277 13.7566 15.384 14.0705L16.384 15.8025ZM16.1844 13.4104C16.1554 13.4996 16.1081 13.5814 16.0459 13.6505L17.5322 14.9888C17.7825 14.7108 17.9711 14.3835 18.0865 14.0284L16.1844 13.4104ZM18.2168 7.37294C18.2168 6.88011 18.2287 6.40918 18.0865 5.9716L16.1844 6.58963C16.2053 6.65416 16.2168 6.744 16.2168 7.37294H18.2168ZM15.3832 5.92961C15.9283 6.24429 16.0006 6.29919 16.0459 6.34954L17.5322 5.01127C17.2242 4.66928 16.8097 4.44376 16.3832 4.19756L15.3832 5.92961ZM18.0865 5.9716C17.9711 5.61653 17.7825 5.28926 17.5322 5.01127L16.0459 6.34954C16.1082 6.41869 16.1554 6.50043 16.1844 6.58963L18.0865 5.9716ZM10 11.5C9.17157 11.5 8.5 10.8284 8.5 9.99999H6.5C6.5 11.933 8.067 13.5 10 13.5V11.5ZM8.5 9.99999C8.5 9.17157 9.17157 8.49999 10 8.49999V6.49999C8.067 6.49999 6.5 8.067 6.5 9.99999H8.5ZM10 8.49999C10.8284 8.49999 11.5 9.17157 11.5 9.99999H13.5C13.5 8.067 11.933 6.49999 10 6.49999V8.49999ZM11.5 9.99999C11.5 10.8284 10.8284 11.5 10 11.5V13.5C11.933 13.5 13.5 11.933 13.5 9.99999H11.5Z" />
            </Icon>
          }
          text={CONTENT.SETTINGS_MENU_ITEM}
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.FORUM}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 5.66666C12.781 5.66666 12.3333 6.11438 12.3333 6.66666C12.3333 7.21895 12.781 7.66666 13.3333 7.66666V5.66666ZM17.5 16.6667L16.861 17.4359C17.1593 17.6836 17.5739 17.7367 17.9249 17.5719C18.2759 17.4072 18.5 17.0544 18.5 16.6667H17.5ZM14.7221 14.359L14.0831 15.1282L14.0831 15.1282L14.7221 14.359ZM7.66667 10.8333C7.66667 10.281 7.21895 9.83333 6.66667 9.83333C6.11438 9.83333 5.66667 10.281 5.66667 10.8333H7.66667ZM5.27791 11.0257L5.91691 11.7949L5.91693 11.7949L5.27791 11.0257ZM2.5 13.3333H1.5C1.5 13.7211 1.72414 14.0739 2.07515 14.2386C2.42615 14.4033 2.84075 14.3503 3.139 14.1026L2.5 13.3333ZM13.3333 7.66666H16.6667V5.66666H13.3333V7.66666ZM16.6667 7.66666C16.5746 7.66666 16.5 7.59204 16.5 7.49999H18.5C18.5 6.48747 17.6792 5.66666 16.6667 5.66666V7.66666ZM16.5 7.49999V16.6667H18.5V7.49999H16.5ZM18.139 15.8974L15.3611 13.5898L14.0831 15.1282L16.861 17.4359L18.139 15.8974ZM15.3611 13.5898C15.0323 13.3167 14.6182 13.1667 14.1899 13.1667V15.1667C14.1505 15.1667 14.1127 15.1528 14.0831 15.1282L15.3611 13.5898ZM14.1899 13.1667H7.5V15.1667H14.1899V13.1667ZM7.5 13.1667C7.59205 13.1667 7.66667 13.2413 7.66667 13.3333H5.66667C5.66667 14.3458 6.48748 15.1667 7.5 15.1667V13.1667ZM7.66667 13.3333V10.8333H5.66667V13.3333H7.66667ZM12.5 4.33333C12.408 4.33333 12.3333 4.25871 12.3333 4.16666H14.3333C14.3333 3.15414 13.5125 2.33333 12.5 2.33333V4.33333ZM12.3333 4.16666V9.99999H14.3333V4.16666H12.3333ZM12.3333 9.99999C12.3333 9.90795 12.408 9.83333 12.5 9.83333V11.8333C13.5125 11.8333 14.3333 11.0125 14.3333 9.99999H12.3333ZM12.5 9.83333H5.81014V11.8333H12.5V9.83333ZM5.81014 9.83333C5.38185 9.83333 4.96777 9.98326 4.6389 10.2565L5.91693 11.7949C5.88729 11.8195 5.84941 11.8333 5.81014 11.8333V9.83333ZM4.63891 10.2565L1.861 12.5641L3.139 14.1026L5.91691 11.7949L4.63891 10.2565ZM3.5 13.3333V4.16666H1.5V13.3333H3.5ZM3.5 4.16666C3.5 4.25871 3.42538 4.33333 3.33333 4.33333V2.33333C2.32081 2.33333 1.5 3.15414 1.5 4.16666H3.5ZM3.33333 4.33333H12.5V2.33333H3.33333V4.33333Z" />
            </Icon>
          }
          text={CONTENT.FORUM_MENU_ITEM}
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.LEADER_BOARD}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.17964 7.89429L2.0619 6.90124L2.0619 6.90124L2.17964 7.89429ZM1.9458 8.61397L2.62476 7.87979L2.62475 7.87978L1.9458 8.61397ZM5.64472 12.0347L4.96577 12.7688L4.96577 12.7688L5.64472 12.0347ZM5.77031 12.4217L6.75114 12.6166V12.6166L5.77031 12.4217ZM4.78841 17.3633L3.80759 17.1684L3.80759 17.1684L4.78841 17.3633ZM5.40091 17.8081L4.91248 16.9355L4.91246 16.9355L5.40091 17.8081ZM9.79747 15.3472L10.2859 16.2198L10.2859 16.2198L9.79747 15.3472ZM10.2044 15.3473L9.71596 16.2199L9.71596 16.2199L10.2044 15.3473ZM14.6005 17.808L15.089 16.9354L15.089 16.9354L14.6005 17.808ZM15.2126 17.3633L14.2318 17.5581L14.2318 17.5582L15.2126 17.3633ZM14.231 12.4218L15.2118 12.2269L15.2118 12.2269L14.231 12.4218ZM14.3566 12.0346L15.0355 12.7688L15.0356 12.7688L14.3566 12.0346ZM18.0552 8.61399L17.3763 7.87981L17.3762 7.87983L18.0552 8.61399ZM17.8215 7.89429L17.9392 6.90124L17.9392 6.90124L17.8215 7.89429ZM12.8182 7.30113L12.7005 8.29417L12.7005 8.29417L12.8182 7.30113ZM12.4894 7.06187L11.5814 7.48071L11.5814 7.48072L12.4894 7.06187ZM10.3792 2.48688L11.2873 2.06804L11.2873 2.06803L10.3792 2.48688ZM9.6224 2.48692L8.71434 2.06807V2.06807L9.6224 2.48692ZM7.51221 7.0618L8.42026 7.48065V7.48065L7.51221 7.0618ZM7.18262 7.30112L7.30036 8.29416L7.30036 8.29416L7.18262 7.30112ZM2.0619 6.90124C0.861421 7.04358 0.379309 8.52738 1.26685 9.34815L2.62475 7.87978C2.99021 8.21775 2.79169 8.82872 2.29738 8.88733L2.0619 6.90124ZM1.26685 9.34815L4.96577 12.7688L6.32368 11.3005L2.62476 7.87979L1.26685 9.34815ZM4.96577 12.7688C4.81615 12.6305 4.75013 12.4249 4.78949 12.2268L6.75114 12.6166C6.84698 12.1343 6.68608 11.6356 6.32368 11.3005L4.96577 12.7688ZM4.78949 12.2268L3.80759 17.1684L5.76924 17.5582L6.75114 12.6166L4.78949 12.2268ZM3.80759 17.1684C3.57178 18.3552 4.83541 19.2706 5.88935 18.6807L4.91246 16.9355C5.34589 16.6929 5.86646 17.0689 5.76924 17.5582L3.80759 17.1684ZM5.88933 18.6807L10.2859 16.2198L9.30905 14.4746L4.91248 16.9355L5.88933 18.6807ZM10.2859 16.2198C10.1085 16.3191 9.89257 16.3187 9.71596 16.2199L10.6928 14.4747C10.2633 14.2343 9.73936 14.2337 9.30903 14.4746L10.2859 16.2198ZM9.71596 16.2199L14.1121 18.6806L15.089 16.9354L10.6928 14.4747L9.71596 16.2199ZM14.1121 18.6806C15.1671 19.2712 16.429 18.3539 16.1934 17.1684L14.2318 17.5582C14.1348 17.0701 14.6544 16.6922 15.089 16.9354L14.1121 18.6806ZM16.1934 17.1684L15.2118 12.2269L13.2501 12.6166L14.2318 17.5581L16.1934 17.1684ZM15.2118 12.2269C15.2512 12.4251 15.1851 12.6305 15.0355 12.7688L13.6776 11.3004C13.3153 11.6355 13.1543 12.1342 13.2501 12.6167L15.2118 12.2269ZM15.0356 12.7688L18.7342 9.34815L17.3762 7.87983L13.6776 11.3004L15.0356 12.7688ZM18.7342 9.34818C19.6214 8.52772 19.1401 7.04363 17.9392 6.90124L17.7037 8.88733C17.2089 8.82867 17.0111 8.21746 17.3763 7.87981L18.7342 9.34818ZM17.9392 6.90124L12.9359 6.30808L12.7005 8.29417L17.7037 8.88733L17.9392 6.90124ZM12.9359 6.30808C13.1391 6.33217 13.3132 6.46036 13.3975 6.64302L11.5814 7.48072C11.787 7.92655 12.2095 8.23596 12.7005 8.29417L12.9359 6.30808ZM13.3975 6.64303L11.2873 2.06804L9.47117 2.90572L11.5814 7.48071L13.3975 6.64303ZM11.2873 2.06803C10.7809 0.970099 9.22058 0.970535 8.71434 2.06807L10.5305 2.90577C10.3221 3.35758 9.67976 3.35793 9.47117 2.90572L11.2873 2.06803ZM8.71434 2.06807L6.60415 6.64296L8.42026 7.48065L10.5305 2.90577L8.71434 2.06807ZM6.60415 6.64296C6.68939 6.45815 6.86406 6.33188 7.06488 6.30807L7.30036 8.29416C7.78898 8.23623 8.21363 7.92863 8.42026 7.48065L6.60415 6.64296ZM7.06488 6.30807L2.0619 6.90124L2.29738 8.88733L7.30036 8.29416L7.06488 6.30807Z" />
            </Icon>
          }
          text={CONTENT.LEADER_BOARD_MENU_ITEM}
        />
        <MenuItem
          darkMode={darkMode}
          onClick={onChangeTheme}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_90_10638)">
                <path d="M9.00001 3.33333C9.00001 3.88562 9.44772 4.33333 10 4.33333C10.5523 4.33333 11 3.88562 11 3.33333H9.00001ZM11 1.66667C11 1.11438 10.5523 0.666668 10 0.666668C9.44772 0.666668 9.00001 1.11438 9.00001 1.66667H11ZM11 16.6667C11 16.1144 10.5523 15.6667 10 15.6667C9.44772 15.6667 9.00001 16.1144 9.00001 16.6667H11ZM9.00001 18.3333C9.00001 18.8856 9.44772 19.3333 10 19.3333C10.5523 19.3333 11 18.8856 11 18.3333H9.00001ZM4.63808 6.05229C5.0286 6.44281 5.66177 6.44281 6.05229 6.05229C6.44281 5.66176 6.44281 5.0286 6.05229 4.63807L4.63808 6.05229ZM4.87378 3.45956C4.48325 3.06904 3.85009 3.06904 3.45957 3.45956C3.06904 3.85009 3.06904 4.48325 3.45957 4.87377L4.87378 3.45956ZM15.4805 14.0661C15.0899 13.6756 14.4568 13.6756 14.0663 14.0661C13.6757 14.4567 13.6757 15.0898 14.0663 15.4804L15.4805 14.0661ZM15.2448 16.6589C15.6353 17.0494 16.2685 17.0494 16.659 16.6589C17.0495 16.2683 17.0495 15.6352 16.659 15.2447L15.2448 16.6589ZM3.33334 11C3.88562 11 4.33334 10.5523 4.33334 10C4.33334 9.44772 3.88562 9 3.33334 9V11ZM1.66667 9C1.11439 9 0.666672 9.44772 0.666672 10C0.666672 10.5523 1.11439 11 1.66667 11V9ZM16.6667 9C16.1144 9 15.6667 9.44772 15.6667 10C15.6667 10.5523 16.1144 11 16.6667 11V9ZM18.3333 11C18.8856 11 19.3333 10.5523 19.3333 10C19.3333 9.44772 18.8856 9 18.3333 9V11ZM14.0667 4.63807C13.6761 5.0286 13.6761 5.66176 14.0667 6.05229C14.4572 6.44281 15.0904 6.44281 15.4809 6.05229L14.0667 4.63807ZM16.6594 4.87377C17.0499 4.48325 17.0499 3.85009 16.6594 3.45956C16.2689 3.06904 15.6357 3.06904 15.2452 3.45956L16.6594 4.87377ZM6.0527 15.4804C6.44322 15.0898 6.44322 14.4567 6.0527 14.0661C5.66217 13.6756 5.02901 13.6756 4.63848 14.0661L6.0527 15.4804ZM3.45997 15.2447C3.06945 15.6352 3.06945 16.2683 3.45997 16.6589C3.8505 17.0494 4.48366 17.0494 4.87419 16.6589L3.45997 15.2447ZM10 13.1667C8.2511 13.1667 6.83334 11.7489 6.83334 10H4.83334C4.83334 12.8535 7.14653 15.1667 10 15.1667V13.1667ZM6.83334 10C6.83334 8.2511 8.2511 6.83333 10 6.83333V4.83333C7.14653 4.83333 4.83334 7.14653 4.83334 10H6.83334ZM10 6.83333C11.7489 6.83333 13.1667 8.2511 13.1667 10H15.1667C15.1667 7.14653 12.8535 4.83333 10 4.83333V6.83333ZM13.1667 10C13.1667 11.7489 11.7489 13.1667 10 13.1667V15.1667C12.8535 15.1667 15.1667 12.8535 15.1667 10H13.1667ZM11 3.33333V1.66667H9.00001V3.33333H11ZM9.00001 16.6667V18.3333H11V16.6667H9.00001ZM6.05229 4.63807L4.87378 3.45956L3.45957 4.87377L4.63808 6.05229L6.05229 4.63807ZM14.0663 15.4804L15.2448 16.6589L16.659 15.2447L15.4805 14.0661L14.0663 15.4804ZM3.33334 9H1.66667V11H3.33334V9ZM16.6667 11H18.3333V9H16.6667V11ZM15.4809 6.05229L16.6594 4.87377L15.2452 3.45956L14.0667 4.63807L15.4809 6.05229ZM4.63848 14.0661L3.45997 15.2447L4.87419 16.6589L6.0527 15.4804L4.63848 14.0661Z" />
              </g>
              <defs>
                <clipPath id="clip0_90_10638">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </Icon>
          }
          text={CONTENT.COLOR_SCHEME_MENU_ITEM}
        />
        <MenuItem
          darkMode={darkMode}
          href={PATHNAMES.SIGNIN}
          icon={
            <Icon
              darkMode={darkMode}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29289 11.7929C8.90236 12.1834 8.90236 12.8166 9.29289 13.2071C9.68341 13.5976 10.3166 13.5976 10.7071 13.2071L9.29289 11.7929ZM12.5 9.99998L13.2071 10.7071C13.5976 10.3166 13.5976 9.6834 13.2071 9.29287L12.5 9.99998ZM10.7071 6.79287C10.3166 6.40235 9.68341 6.40235 9.29289 6.79287C8.90236 7.1834 8.90236 7.81656 9.29289 8.20709L10.7071 6.79287ZM3.33333 8.99998C2.78104 8.99998 2.33333 9.4477 2.33333 9.99998C2.33333 10.5523 2.78104 11 3.33333 11L3.33333 8.99998ZM4.36238 16.5398L3.9797 17.4637L4.36238 16.5398ZM4.33333 14.1666C4.33333 13.6144 3.88561 13.1666 3.33333 13.1666C2.78104 13.1666 2.33333 13.6144 2.33333 14.1666H4.33333ZM3.4602 15.6378L2.53632 16.0205V16.0205L3.4602 15.6378ZM16.4852 15.7567L15.5942 15.3027L16.4852 15.7567ZM15.7565 16.485L15.3025 15.594L15.7565 16.485ZM15.7565 3.51497L16.2105 2.62396L15.7565 3.51497ZM16.4852 4.24335L15.5942 4.69734L16.4852 4.24335ZM2.33333 5.8333C2.33333 6.38559 2.78104 6.8333 3.33333 6.8333C3.88561 6.8333 4.33333 6.38559 4.33333 5.8333H2.33333ZM10.7071 13.2071L13.2071 10.7071L11.7929 9.29287L9.29289 11.7929L10.7071 13.2071ZM13.2071 9.29287L10.7071 6.79287L9.29289 8.20709L11.7929 10.7071L13.2071 9.29287ZM12.5 8.99998L3.33333 8.99998L3.33333 11L12.5 11L12.5 8.99998ZM5.83333 4.33331H14V2.33331H5.83333V4.33331ZM15.6667 5.99994V13.9999H17.6667V5.99994H15.6667ZM14 15.6666H5.83333V17.6666H14V15.6666ZM5.83333 15.6666C5.43135 15.6666 5.18001 15.6661 4.98957 15.6531C4.80814 15.6407 4.75607 15.6205 4.74506 15.6159L3.9797 17.4637C4.27498 17.586 4.5701 17.6291 4.85343 17.6485C5.12775 17.6672 5.45874 17.6666 5.83333 17.6666V15.6666ZM2.33333 14.1666C2.33333 14.5412 2.33279 14.8723 2.35151 15.1466C2.37084 15.43 2.414 15.7252 2.53632 16.0205L4.38408 15.2551C4.37952 15.2441 4.35925 15.192 4.34687 15.0105C4.33387 14.82 4.33333 14.5686 4.33333 14.1666H2.33333ZM4.74506 15.6159C4.58152 15.5482 4.45166 15.4183 4.38408 15.2551L2.53632 16.0205C2.80705 16.6741 3.32648 17.1931 3.9797 17.4637L4.74506 15.6159ZM15.6667 13.9999C15.6667 14.4832 15.6659 14.7855 15.6474 15.0134C15.6297 15.2295 15.6011 15.289 15.5942 15.3027L17.3762 16.2107C17.5509 15.8678 17.613 15.5156 17.6407 15.1759C17.6675 14.8479 17.6667 14.4501 17.6667 13.9999H15.6667ZM14 17.6666C14.4502 17.6666 14.848 17.6674 15.176 17.6406C15.5158 17.6128 15.8678 17.5506 16.2105 17.376L15.3025 15.594C15.2887 15.601 15.2291 15.6296 15.0131 15.6473C14.7854 15.6659 14.4832 15.6666 14 15.6666V17.6666ZM15.5942 15.3027C15.5305 15.4276 15.4285 15.5298 15.3025 15.594L16.2105 17.376C16.7117 17.1206 17.1203 16.7129 17.3762 16.2107L15.5942 15.3027ZM14 4.33331C14.4832 4.33331 14.7854 4.33409 15.0131 4.3527C15.2291 4.37035 15.2887 4.39893 15.3025 4.40598L16.2105 2.62396C15.8678 2.44935 15.5158 2.38711 15.176 2.35934C14.848 2.33254 14.4502 2.33331 14 2.33331V4.33331ZM17.6667 5.99994C17.6667 5.54983 17.6675 5.15204 17.6407 4.82403C17.613 4.48432 17.5509 4.13219 17.3762 3.78936L15.5942 4.69734C15.6012 4.71103 15.6297 4.77048 15.6474 4.98658C15.6659 5.21438 15.6667 5.51663 15.6667 5.99994H17.6667ZM15.3025 4.40598C15.4283 4.4701 15.5305 4.57231 15.5942 4.69734L17.3762 3.78936C17.1203 3.28718 16.7118 2.87942 16.2105 2.62396L15.3025 4.40598ZM4.33333 5.8333C4.33333 5.43133 4.33387 5.17994 4.34687 4.98945C4.35925 4.80793 4.37952 4.75583 4.38408 4.74485L2.53632 3.97948C2.414 4.27478 2.37084 4.56996 2.35151 4.8533C2.33279 5.12767 2.33333 5.4587 2.33333 5.8333H4.33333ZM5.83333 2.33331C5.45873 2.33331 5.12774 2.33277 4.85341 2.35149C4.57007 2.37083 4.27496 2.414 3.9797 2.5363L4.74506 4.38406C4.75608 4.3795 4.80816 4.35923 4.98958 4.34685C5.18002 4.33385 5.43136 4.33331 5.83333 4.33331V2.33331ZM4.38408 4.74485C4.45165 4.58171 4.58149 4.45181 4.74506 4.38406L3.9797 2.5363C3.32651 2.80686 2.80706 3.32585 2.53632 3.97948L4.38408 4.74485Z" />
            </Icon>
          }
          text={CONTENT.SIGNOUT_MENU_ITEM}
        />
      </List>
    )
  }
)