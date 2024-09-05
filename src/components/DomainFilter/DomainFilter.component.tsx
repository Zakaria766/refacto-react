import { useEffect, useState } from 'react';
import { threadId } from 'worker_threads';
import {getDomainLists, DomainLists} from '../../utils/domainUtils'


interface Props {
  domains?: string[]
}

const DomainFilter = (props: Props) => {
  const domains = props?.domains ?? [];

  let [state, setState] = useState<DomainLists>({
    countries: [],
    classifications: [],
    subClassifications: []
  });


  useEffect(() => {
    const lists = getDomainLists(domains);
    setState(lists);
  }, [domains]);

  return (<>
    <select name="countries" multiple>
      {state.countries.map(country => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
    <select name="classifications" multiple>
      {state.classifications.map(classification => (
        <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
    <select name="subClassifications" multiple>
      {state.subClassifications.map(subClassification => (
        <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  </>);
}

export default DomainFilter
