declare namespace humannames {
  type Gender = 'male' | 'female' | 'both'

  export function getRandom(locale: string, gender: Gender) : string | undefined
}

declare module '@watrack/human-names' {
  export = humannames
}
