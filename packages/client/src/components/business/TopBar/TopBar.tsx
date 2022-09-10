import react, { memo } from 'react'
import { Wrapper, Button, Icon } from './StyledComponents'
import { DarkModeType } from '../../../types'

export const TopBar = memo(({ darkMode }: DarkModeType) => {
  return (
    <Wrapper darkMode={darkMode}>
      <Button darkMode={darkMode}>
        <Icon
          darkMode={darkMode}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9962 14.1963L20.6887 13.4749L20.6887 13.4749L19.9962 14.1963ZM20.4019 14.5858L19.7094 15.3072L19.7094 15.3072L20.4019 14.5858ZM20.7789 16.3197L21.7224 16.6512L20.7789 16.3197ZM20.1248 16.9475L20.4329 17.8989L20.1248 16.9475ZM20.638 14.831L21.4388 14.232L20.638 14.831ZM20.8196 15.2523L19.8339 15.4208L20.8196 15.2523ZM12.5 3L12.5 2L12.5 3ZM4.18044 15.2523L5.16614 15.4208L4.18044 15.2523ZM4.362 14.831L3.56122 14.232L4.362 14.831ZM4.22132 16.3196L5.16478 15.9881L4.22132 16.3196ZM4.8752 16.9475L5.18327 15.9961L4.8752 16.9475ZM15.625 17H16.625C16.625 16.4477 16.1773 16 15.625 16V17ZM9.37502 17V16C8.82274 16 8.37502 16.4477 8.37502 17H9.37502ZM5.29053 15.3072L5.69627 14.9177L4.3112 13.4749L3.90547 13.8644L5.29053 15.3072ZM6.20835 13.7224V10H4.20835V13.7224H6.20835ZM18.7917 10V13.7224H20.7917V10H18.7917ZM19.3036 14.9177L19.7094 15.3072L21.0945 13.8645L20.6887 13.4749L19.3036 14.9177ZM19.36 16H5.63967V18H19.36V16ZM19.8336 15.5858C19.8336 15.7904 19.8332 15.9006 19.8285 15.9801C19.8242 16.0521 19.819 16.035 19.8355 15.9882L21.7224 16.6512C21.8478 16.2942 21.8336 15.8878 21.8336 15.5858H19.8336ZM19.36 18C19.6838 18 20.0828 18.0122 20.4329 17.8989L19.8167 15.9961C19.8528 15.9845 19.8589 15.9905 19.778 15.9949C19.6907 15.9996 19.5716 16 19.36 16V18ZM19.8355 15.9882C19.837 15.9837 19.8385 15.9833 19.836 15.9856C19.8335 15.9881 19.8275 15.9927 19.8167 15.9961L20.4329 17.8989C21.0263 17.7067 21.511 17.2529 21.7224 16.6512L19.8355 15.9882ZM19.7094 15.3072C19.776 15.3712 19.8095 15.4034 19.8333 15.4278C19.8529 15.4478 19.8482 15.4446 19.8372 15.4299L21.4388 14.232C21.3285 14.0846 21.1941 13.9601 21.0945 13.8645L19.7094 15.3072ZM21.8336 15.5858C21.8336 15.4489 21.8366 15.2668 21.8053 15.0838L19.8339 15.4208C19.8306 15.4016 19.8315 15.3945 19.8323 15.4198C19.8334 15.4515 19.8336 15.4958 19.8336 15.5858H21.8336ZM19.8372 15.4299C19.8369 15.4295 19.8349 15.4265 19.8339 15.4208L21.8053 15.0838C21.7524 14.7741 21.6262 14.4827 21.4388 14.232L19.8372 15.4299ZM18.7917 13.7224C18.7917 14.1788 18.981 14.6079 19.3036 14.9177L20.6887 13.4749C20.7495 13.5333 20.7917 13.6214 20.7917 13.7224H18.7917ZM12.5 4C16.0137 3.99999 18.7917 6.72436 18.7917 10H20.7917C20.7917 5.54364 17.0405 1.99999 12.5 2L12.5 4ZM6.20835 10C6.20835 6.72438 8.98637 4.00001 12.5 4L12.5 2C7.95953 2.00001 4.20835 5.54365 4.20835 10H6.20835ZM5.69627 14.9177C6.0185 14.6083 6.20835 14.1795 6.20835 13.7224H4.20835C4.20835 13.6209 4.2508 13.5329 4.3112 13.4749L5.69627 14.9177ZM5.16669 15.5858C5.16669 15.4952 5.16681 15.4509 5.16786 15.4189C5.16871 15.3933 5.16955 15.4009 5.16614 15.4208L3.19474 15.0838C3.16336 15.2673 3.16669 15.451 3.16669 15.5858H5.16669ZM3.90547 13.8644C3.80533 13.9605 3.67137 14.0848 3.56122 14.232L5.16278 15.4299C5.15194 15.4444 5.14735 15.4475 5.16684 15.4276C5.19059 15.4033 5.224 15.3711 5.29053 15.3072L3.90547 13.8644ZM5.16614 15.4208C5.16523 15.4261 5.16332 15.4292 5.16278 15.4299L3.56122 14.232C3.37351 14.483 3.24761 14.7745 3.19474 15.0838L5.16614 15.4208ZM3.16669 15.5858C3.16669 15.8878 3.15246 16.2942 3.27787 16.6511L5.16478 15.9881C5.18125 16.035 5.17603 16.0521 5.17178 15.9801C5.16709 15.9006 5.16669 15.7904 5.16669 15.5858H3.16669ZM5.63967 16C5.42807 16 5.30912 15.9996 5.22191 15.9949C5.14117 15.9905 5.14729 15.9845 5.18327 15.9961L4.56714 17.8989C4.91721 18.0122 5.31583 18 5.63967 18V16ZM3.27787 16.6511C3.48914 17.2524 3.97326 17.7066 4.56714 17.8989L5.18327 15.9961C5.17264 15.9927 5.16678 15.9882 5.16433 15.9858C5.16195 15.9836 5.1633 15.9839 5.16478 15.9881L3.27787 16.6511ZM14.625 17V18H16.625V17H14.625ZM10.375 18V17H8.37502V18H10.375ZM9.37502 18H15.625V16H9.37502V18ZM12.5 20C11.2875 20 10.375 19.0665 10.375 18H8.37502C8.37502 20.2472 10.2607 22 12.5 22V20ZM14.625 18C14.625 19.0665 13.7125 20 12.5 20V22C14.7393 22 16.625 20.2472 16.625 18H14.625Z" />
        </Icon>
      </Button>
    </Wrapper>
  )
})
