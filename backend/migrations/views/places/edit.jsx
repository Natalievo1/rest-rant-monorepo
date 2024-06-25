const React = require('react')
const Def = require('../default.jsx')
<div className="form-group">
  <label for="founded">Founded Year</label>
  <input className="form-control" id="founded" name="founded" />
</div>

<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  ...
</form>
const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          ...
        </Def>
    )
}
<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="form-group">
      <label htmlFor="name">Place Name</label>
      <input 
        className="form-control" 
        id="name" 
        name="name" 
        value={data.place.name} 
      required />
  </div>
  ...
</form>

module.exports = edit_form


module.exports = edit_form
