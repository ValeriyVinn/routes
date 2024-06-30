import { useRef, Suspense } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';

const DogDetails = () => {
  // useEffect(() => {
  //     HTTP запит, якщо потрібно
  // } [])

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  return (
    <>
      <h2>DogDetails: {dogId}</h2>
      <Link to={backLinkLocationRef.current}>Повернутись</Link>
      <ul>
        <li>
          <Link to="subbreeds">Підпороди</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage.</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
