import  Link from 'next/link'



export default function Home (){
    return(
      <div>
        <h1>HOME</h1>
        <Link href="/sobre">
        <a>Acessar página Sobre</a>
        </Link>
      </div>
    )
}