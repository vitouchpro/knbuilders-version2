import LegalPage from '../components/LegalPage.jsx'
import { LEGAL } from '../content/legal.js'

export default function Terms() {
  return <LegalPage doc={LEGAL.terms} />
}
