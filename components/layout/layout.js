import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <nav
        aria-label="menu nav"
        className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
      >
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#" aria-label="Home">
              <span className="text-xl pl-2"></span>
            </a>
          </div>

          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            <span className="relative w-full">
              <input
                aria-label="search"
                type="search"
                id="search"
                placeholder="Search"
                className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
              />
              <div></div>
            </span>
          </div>

          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li
                className="nav-item d-none d-sm-inline-block"
                style={{ marginRight: "3px" }}
              >
                <select className="form-control" name="" id="">
                  <option value="">Selecione uma Empresa</option>
                </select>
              </li>

              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  <button
                    onclick="toggleDD('myDropdown')"
                    className="drop-button text-white py-2 px-2"
                  >
                    {" "}
                    <span className="pr-2">
                      <i className="em em-robot_face"></i>
                    </span>{" "}
                    Definicoes
                    <svg
                      className="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
        <Link href="/">
          <a className="brand-link">
            <span className="brand-text font-weight-light"> EMARPE</span>
          </a>
        </Link>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="Usuario" className="d-block">
                Usuario
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>

              <li className="nav-item">
                <Link href="/balancetes">
                  <a className="nav-link nav-link-active">
                    <i className="nav-icon  bi bi-layout-text-window-reverse"></i>

                    <p>Balancetes</p>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/parametrizacao">
                  <a className="nav-link">
                    <i className="nav-icon bi bi-journals"></i>

                    <p>Parametrizacao</p>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/ajudas">
                  <a className="nav-link">
                    <i className="nav-icon bi  bi-hand-thumbs-up-fill"></i>

                    <p>Ajudas</p>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <a href="contabilidades" className="nav-link">
                  <i className="nav-icon bi bi-file-text"></i>

                  <p>Contabilidades</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="usuario" className="nav-link">
                  <i className="nav-icon bi bi-person-lines-fill"></i>

                  <p>Usuario</p>
                </a>
              </li>

              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Monitoramento
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="empresas" className="nav-link">
                      <i className="bir bi-circle nav-icon"></i>
                      <p>Empresas</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/indicador_mensal" className="nav-link">
                      <i className="bir bi-circle nav-icon"></i>
                      <p>Indicador Mensal</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/indicador_trimestral" className="nav-link">
                      <i className="bir bi-circle nav-icon"></i>
                      <p>Indicador Trimestral</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="indicador_anual" className="nav-link ">
                      <i className="bir bi-circle nav-icon"></i>
                      <p>Indicador Anual </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/planos" className="nav-link">
                      <i className="nav-icon fas fa-file"></i>

                      <p>Plano de Conta</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/variaveis" className="nav-link">
                      <i className="nav-icon bis bis-chart-pie"></i>
                      <p>DRE</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="variaveis" className="nav-link">
                      <i className="nav-icon bi bi-back"></i>
                      <p>Central de Relatorios</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main> {children} </main>

      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">EMARPE </div>
        <strong></strong> Plataforma de contabilidade.
      </footer>
    </div>
  );
}
