const TabsNavigation = ({ currentPageHash, setCurrentPageHash }) => {
  return (
    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <a
          className={currentPageHash === "" || currentPageHash === "#ex1-tabs-1" ? "nav-link active" : "nav-link"}
          id="ex1-tab-1"
          data-mdb-tab-init
          href="#ex1-tabs-1"
          role="tab"
          aria-controls="ex1-tabs-1"
          aria-selected="true"
          onClick={() => setCurrentPageHash("#ex1-tabs-1")}
        >
          All
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className={currentPageHash === "#ex1-tabs-2" ? "nav-link active" : "nav-link"}
          id="ex1-tab-2"
          data-mdb-tab-init
          href="#ex1-tabs-2"
          role="tab"
          aria-controls="ex1-tabs-2"
          aria-selected="false"
          onClick={() => setCurrentPageHash("#ex1-tabs-2")}
        >
          Active
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className={currentPageHash === "#ex1-tabs-3" ? "nav-link active" : "nav-link"}
          id="ex1-tab-3"
          data-mdb-tab-init
          href="#ex1-tabs-3"
          role="tab"
          aria-controls="ex1-tabs-3"
          aria-selected="false"
          onClick={() => setCurrentPageHash("#ex1-tabs-3")}
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

export default TabsNavigation;