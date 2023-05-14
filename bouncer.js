const bouncer = arr => arr.filter(Boolean);

bouncer([false, null, 0, NaN, undefined, ""]);