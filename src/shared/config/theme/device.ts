//https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '500px',
    tablet: '768px',
    laptopS: '920px',
    laptop: '1024px',
    desktopS: '1300px',
}

export const device = {
    tabletS: `(max-width: ${size.tabletS})`,
    laptopS: `(max-width: ${size.laptopS})`,
    desktopS: `(max-width: ${size.desktopS})`,
}