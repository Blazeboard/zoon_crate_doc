(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>","synthetic":false,"types":["bytes::bytes::Bytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["bytestring"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"bytestring/struct.ByteString.html\" title=\"struct bytestring::ByteString\">ByteString</a>","synthetic":false,"types":["bytestring::ByteString"]}];
implementors["camino"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"camino/struct.Utf8Path.html\" title=\"struct camino::Utf8Path\">Utf8Path</a>&gt; for <a class=\"struct\" href=\"camino/struct.Utf8PathBuf.html\" title=\"struct camino::Utf8PathBuf\">Utf8PathBuf</a>","synthetic":false,"types":["camino::Utf8PathBuf"]}];
implementors["futures_signals"] = [{"text":"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[A]</a>&gt; for <a class=\"struct\" href=\"futures_signals/signal_vec/struct.MutableVecLockRef.html\" title=\"struct futures_signals::signal_vec::MutableVecLockRef\">MutableVecLockRef</a>&lt;'a, A&gt;","synthetic":false,"types":["futures_signals::signal_vec::mutable_vec::MutableVecLockRef"]},{"text":"impl&lt;'a, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.slice.html\">[A]</a>&gt; for <a class=\"struct\" href=\"futures_signals/signal_vec/struct.MutableVecLockMut.html\" title=\"struct futures_signals::signal_vec::MutableVecLockMut\">MutableVecLockMut</a>&lt;'a, A&gt;","synthetic":false,"types":["futures_signals::signal_vec::mutable_vec::MutableVecLockMut"]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["generic_array::GenericArray"]}];
implementors["http"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>","synthetic":false,"types":["http::header::name::HeaderName"]}];
implementors["os_str_bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"os_str_bytes/struct.RawOsStr.html\" title=\"struct os_str_bytes::RawOsStr\">RawOsStr</a>&gt; for <a class=\"struct\" href=\"os_str_bytes/struct.RawOsString.html\" title=\"struct os_str_bytes::RawOsString\">RawOsString</a>","synthetic":false,"types":["os_str_bytes::raw_str::RawOsString"]}];
implementors["owning_ref"] = [{"text":"impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt;","synthetic":false,"types":["owning_ref::OwningRef"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["time"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"time/struct.Instant.html\" title=\"struct time::Instant\">Instant</a>","synthetic":false,"types":["time::instant::Instant"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["toml"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"toml/struct.Spanned.html\" title=\"struct toml::Spanned\">Spanned</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;","synthetic":false,"types":["toml::spanned::Spanned"]}];
implementors["uuid"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Hyphenated.html\" title=\"struct uuid::fmt::Hyphenated\">Hyphenated</a>","synthetic":false,"types":["uuid::fmt::Hyphenated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Simple.html\" title=\"struct uuid::fmt::Simple\">Simple</a>","synthetic":false,"types":["uuid::fmt::Simple"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Urn.html\" title=\"struct uuid::fmt::Urn\">Urn</a>","synthetic":false,"types":["uuid::fmt::Urn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Braced.html\" title=\"struct uuid::fmt::Braced\">Braced</a>","synthetic":false,"types":["uuid::fmt::Braced"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()