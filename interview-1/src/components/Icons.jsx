export function BurgerIcon() {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='#fff'
    >
      <g strokeWidth={2} strokeLinecap='round'>
        <path d='M4 18h16M4 12h16M4 6h16' />
      </g>
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
        fill='#fff'
      />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g stroke='#fff' strokeWidth={2} strokeLinejoin='round'>
        <path d='M4.51 10.434c.233-1.637.35-2.456.914-2.945C5.988 7 6.815 7 8.47 7h7.061c1.655 0 2.482 0 3.046.49.564.488.68 1.307.915 2.944l.857 6c.303 2.125.455 3.187-.143 3.876-.598.69-1.671.69-3.817.69H7.612c-2.146 0-3.219 0-3.817-.69-.598-.69-.446-1.751-.143-3.876l.857-6Z' />
        <path d='M9 11V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6' strokeLinecap='round' />
      </g>
    </svg>
  );
}

export function AddToCartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='#fff'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l6 .429m7.138 6.573l-.143 1h-13' />
      <path d='M15 6h6m-3 -3v6' />
    </svg>
  );
}

export function RemoveFromCartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='#fff'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l8 .571m5.43 4.43l-.429 3h-13' />
      <path d='M17 3l4 4' />
      <path d='M21 3l-4 4' />
    </svg>
  );
}

export function ClearCartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='1'
      stroke='#fff'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17a2 2 0 1 0 2 2' />
      <path d='M17 17h-11v-11' />
      <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
