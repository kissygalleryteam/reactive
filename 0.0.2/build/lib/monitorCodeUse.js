define("kg/react/0.0.2/lib/monitorCodeUse",["./invariant"],function(t,e,n){"use strict";function a(t){"production"!==process.env.NODE_ENV?i(t&&!/[^a-z0-9_]/.test(t),"You must provide an eventName using only the characters [a-z0-9_]"):i(t&&!/[^a-z0-9_]/.test(t))}var i=t("./invariant");n.exports=a});