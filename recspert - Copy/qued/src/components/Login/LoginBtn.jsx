

export default function LoginBtn({name,onLogin}) {
  return (
   <>
    <div>
              <button
              onClick={onLogin}
                type="submit"
                className="flex md:w-full   capitalize my-2 justify-center rounded-md bg-amber-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
              {name}
              </button>
              </div>
   </>
  )
}
