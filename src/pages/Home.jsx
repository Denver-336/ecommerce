
export default function Home () {
  return (
    <section className='p-5 d-flex align-items-center row'>
      <div className='col-12'>
        <div className='text-center'>
          <h1 className='text-center'>
            <span className='d-block'>Bienvenido a</span>
            <span className='d-block'>EDcommerce</span>
          </h1>
          <p className='text-lg'>Donde comprar es sinónimo de gastar plata</p>
        </div>
        <div className='d-flex align-items-center'>
          <img className='img-fluid rounded mx-auto d-block' src='/cartas.png' alt='Banner' />
        </div>
      </div>
    </section>
  )
}
