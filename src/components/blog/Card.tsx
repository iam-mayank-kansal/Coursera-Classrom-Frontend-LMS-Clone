export default function Card({ href, title, body }: any) {
  return (
    <li className="link-card list-none flex p-[1px] bg-[#23262d] bg-no-repeat bg-[400%] rounded-[7px] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-inner hover:bg-[var(--accent-gradient)] hover:bg-[0] focus-within:bg-[var(--accent-gradient)] focus-within:bg-[0]">
      <a
        href={href}
        className="w-full no-underline leading-[1.4] p-[calc(1.5rem_-_1px)] rounded-[8px] text-white bg-[#23262d] opacity-80 hover:bg-[var(--accent-gradient)] focus-within:bg-[var(--accent-gradient)]"
      >
        <h2 className="text-[1.25rem] m-0 transition-colors duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[rgb(var(--accent-light))] focus-within:text-[rgb(var(--accent-light))]">
          {title}
          <span>&rarr;</span>
        </h2>
        <p className="mt-[0.5rem] mb-0">{body}</p>
      </a>
    </li>
  );
}
