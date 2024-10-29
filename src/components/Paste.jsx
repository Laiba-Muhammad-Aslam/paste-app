import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      Paste
    </div>
  )
}
