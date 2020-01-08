
export const STREET = 'STREET'
export const CITY = 'CITY'

/*
 * other constants
 */


/*
 * action creators
 */
export function street(text) {
  return { type: STREET, text }
}
export function city(text) {
  return { type: CITY, text }
}
